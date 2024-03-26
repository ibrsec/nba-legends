 

import contentStyle from "./Content.module.scss";


const Content = ({children}) => { 


    return(
        <section className={contentStyle.content}>
            {children}
            
        </section>
    )
}

export default Content;