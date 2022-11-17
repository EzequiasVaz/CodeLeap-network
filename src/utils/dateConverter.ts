export function dateConverter(datePosted: Date) {

    // console.log(Math.floor(new Date(datePosted).getTime() / 1000.0)) //verify Date - timestamp
    const dateDifference = +new Date() - +new Date(datePosted)

    const diffInDays = dateDifference / (1000 * 60 * 60 * 24)



    if (diffInDays < 1) {

        const diffInHours = diffInDays * 24

        if (diffInHours > 1 && diffInHours < 2) {
            return `${Math.floor(diffInHours)} hour ago`
        }

        if (diffInHours > 2) {
            return `${Math.floor(diffInHours)} hours ago`
        }

        if (diffInHours < 1) {
            const diffInMinutes = diffInHours * 60

            if (diffInMinutes > 1 && diffInMinutes < 2) {
                return `${Math.floor(diffInMinutes)} minute ago`
            }

            if (diffInMinutes > 2) {
                return `${Math.floor(diffInMinutes)} minutes ago`
            }

            if (diffInMinutes < 1) {
                const diffInSeconds = diffInMinutes * 60
                if (diffInSeconds >= 0 && diffInSeconds < 1) {
                    return `${Math.floor(diffInSeconds)} seconds ago`
                }
                if (diffInSeconds > 1 && diffInSeconds < 2) {
                    return `${Math.floor(diffInSeconds)} second ago`
                }
                if (diffInSeconds > 2) {
                    return `${Math.floor(diffInSeconds)} seconds ago`
                }
            }
        }

    }

    if (diffInDays > 1 && diffInDays < 2) {
        return `${Math.floor(diffInDays)} day ago`
    }

    if (diffInDays > 2 && diffInDays < 31) {
        return `${Math.floor(diffInDays)} days ago`
    }

    if (diffInDays > 31) {

        const diffInMonth = diffInDays / 30

        if (diffInMonth < 2) {
            return `${Math.floor(diffInMonth)} month ago`
        }
        if (diffInMonth > 2 && diffInMonth <= 12) {
            return `${Math.floor(diffInMonth)} months ago`
        }

        if (diffInMonth > 12) {
            const diffInYear = diffInMonth / 12

            if (diffInYear < 2) {
                return `${Math.floor(diffInYear)} year ago`
            }
            if (diffInYear > 2) {
                return `${Math.floor(diffInYear)} years ago`
            }
        }

    }

}