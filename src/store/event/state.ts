export interface EventInterface {
    list: [
        {
            user_email: string,
            user_number: string,
            user_name: string,
            event_name: string,
            event_date: string,
            event_location: string,
        }
    ],
    loading: boolean,
    currentUserData: {
        user_email: string,
        user_number: string,
        user_name: string,
        event_name: string,
        event_date: string,
        event_location: string,
    },
    user_email: string,
    user_number: string,
    user_name: string,
    event_name: string,
    event_date: string,
    event_location: string,
    endpoint: string
}