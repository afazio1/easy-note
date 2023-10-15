import { useEffect, useState } from "react";
import Cookies from "js-cookie"

export default function SidePage(props) {
    const { transcript } = props;
    const [aiText, setAiText] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetch("http://127.0.0.1:8000/notes/AIView/", {
            method: "POST",
            headers: {
                "X-CSRFToken": Cookies.get('csrftoken'),
                "Accept": "application/json",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: transcript
            }),
            // referrerPolicy: "no-cors"
        }).then((res) => res.json())
            .then(data => {
                setLoading(false)
                setAiText(data.data)
            }).catch(e => console.log(e))
    }, [transcript])

    return (
        <main className="flex flex-col gap-4 justify-center text-white">
            <section className="flex flex-row gap-4 justify-center">
                <section className="flex flex-col justify-start w-[50%] m-4">
                    <h1 className="lg:text-2xl text-blue-200">Raw Text</h1>
                    <p>{ transcript }</p>
                </section>
                <section className="flex flex-col justify-start m-4 w-[50%]">
                    <h1 className="lg:text-2xl text-blue-200">AI Text</h1>
                    <p>{ loading ? "loading..." : aiText }</p>
                </section>
            </section>
        </main>
    )
}