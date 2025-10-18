import style from "./Container.module.css";

export const Container = ({children}) => {
    console.log(style)
    return (
        <div className={style.container}>{children}</div>
    )
}