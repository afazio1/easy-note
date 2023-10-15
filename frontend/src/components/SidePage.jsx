import { useEffect, useState } from "react";
import Cookies from "js-cookie"
import './styles.css'; // Import the CSS file

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
                <section className="flex flex-col justify-center w-[50%] m-4">
                  <h1 className="text-lg" style={{ color: 'white', fontFamily: 'Arial', fontSize: '24px' }}>Raw Text</h1>
                  <div className="fixed-section">
                      <p style={{ color: 'white', fontFamily: 'Helvetica, sans-serif', fontSize: '18px' }}>{transcript}</p>
                  </div>
                </section>
                <section className="flex flex-col justify-center w-[50%] m-4">
                    <h1 className="text-lg" style={{ color: 'white', fontFamily: 'Arial', fontSize: '24px' }}>AI Text</h1>
                    <div className="fixed-section">
                      <p style={{ color: 'white', fontFamily: 'Helvetica, sans-serif', fontSize: '18px' }}>{ loading ? "loading..." : aiText }</p>
                    </div>
                </section>
            </section>
        </main>
    );
}