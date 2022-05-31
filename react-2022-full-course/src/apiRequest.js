const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
    try {
        const response = await fetch(url, optionsObj);
        if (!response.ok) throw Error(errMsg);
    } catch (error) {
        errMsg = error.message
    } finally {
        return errMsg
    }
}

export default apiRequest;