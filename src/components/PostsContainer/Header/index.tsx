import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import { SignOut } from "phosphor-react"
import { Header, HeaderNavigation, HeaderRightSide, HeaderTitle, HeaderUsername, HeaderWelcomeMessage, UserLogout } from "./style"
import { setRemoveUsername } from "../../../redux/setUser.action"
import { useNavigate } from "react-router-dom"
import { useCallback, useEffect, useState } from "react"


export function HeaderPostContainer() {

    const [isScrolling, setIsScrolling] = useState(false)

    const username = useSelector((state: RootState) => state.user.username)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const addClassScroll = useCallback(() => {

        let scroll = window.scrollY

        scroll > 30 ? setIsScrolling(true) : setIsScrolling(false)

    }, [])

    useEffect(() => {
        document.addEventListener("scroll", addClassScroll, false)
        return () => document.removeEventListener("scroll", addClassScroll)
    }, [])

    return (
        <Header className={isScrolling ? 'active-scrolling' : ''} onClick={() => {
            window.scrollTo(0, 0)
        }}>
            <HeaderTitle>CodeLeap Network</HeaderTitle>
            <HeaderRightSide>
                <HeaderWelcomeMessage>Welcome back, <HeaderUsername>{username}</HeaderUsername></HeaderWelcomeMessage>
                <HeaderNavigation>
                    <UserLogout onClick={() => {
                        dispatch(setRemoveUsername())
                        navigate('/')
                    }
                    } tabIndex={0}><SignOut size={24} /></UserLogout>
                </HeaderNavigation>
            </HeaderRightSide>
        </Header >
    )
}