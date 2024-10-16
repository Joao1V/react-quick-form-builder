import React from "react"

interface MyProps {
    title: string
}

const MyComponent: React.FC<MyProps> = (props) => {

    return <h1>{props.title}</h1>
}

export default MyComponent