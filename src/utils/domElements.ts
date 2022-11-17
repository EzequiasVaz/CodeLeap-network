export function disableDomElements() {

    document.body.style.overflow = 'hidden'
    document.body.style.overscrollBehaviorY = 'none'

}


export function enableDomElements() {
    document.body.style.overflow = 'auto'
}

export function clearInput() {
    document.querySelectorAll('input').forEach(item => {
        item.value = ''
    })
    document.querySelectorAll('textarea').forEach(item => {
        item.value = ''
    })
}