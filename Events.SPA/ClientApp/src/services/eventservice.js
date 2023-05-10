export const getEvents = async () => {
    try {
        let response = await fetch(`events`);
        let data = await response.json();
        return data;
    }
    catch (error) {
        return -2;
    }
}
export const getEvent = async (id) => {
    try {
        let response = await fetch(`events/` + id);
        let data = await response.json();
        return data;
    }
    catch (error) {
        return -2;
    }
}
export const addEvent = async (form) => {
    try {
        let response = await fetch(`events`, {
            method: 'POST',
            body: form

        })
            .then((response) => {
                console.log(response) 

            })
    }
    catch (error) {
        return -2;
    }
}