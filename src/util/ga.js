import ReactGA from 'react-ga'

export class GoogleAnalytics {
    static init() {
        console.log("GA IN!", process.env.ga_key)
        if(process.env.ga_key) {

            console.log("GA INIT!")
            ReactGA.initialize("UA-158537537-2")
        }
    }

    static logPageView() {
        console.log("GA LOG: ", window.location.pathname)
        ReactGA.set({ page: window.location.pathname })
        ReactGA.pageview(window.location.pathname)
    }

    static logEvent = (category = '', action = '') => {
        if (category && action) {
            ReactGA.event({ category, action })
        }
    }

    static logException = (description = '', fatal = false) => {
        if (description) {
            ReactGA.exception({ description, fatal })
        }
    }
}