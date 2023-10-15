import './styles.css'; // Import the CSS file

export default function SidePage(props) {
    const { transcript } = props;

    return (
        <main className="flex flex-col gap-4 justify-center">
            <section className="flex flex-row gap-4 justify-center">
                <section className="flex flex-col justify-center min-w-[50%] m-4">
                <h1 className="text-lg" style={{ color: 'white', fontFamily: 'Arial', fontSize: '24px' }}>Raw Text</h1>
                    <div className="fixed-section">
                    <p style={{ color: 'white', fontFamily: 'Helvetica, sans-serif', fontSize: '18px' }}>{transcript}</p>
                    </div>
                </section>
                <section className="flex flex-col justify-center m-4">
                <h1 className="text-lg" style={{ color: 'white', fontFamily: 'Arial', fontSize: '24px' }}>AI Text</h1>
                    <div className="fixed-section">
                    <p style={{ color: 'white', fontFamily: 'Helvetica, sans-serif', fontSize: '18px' }}>words words</p>
                    </div>
                </section>a
            </section>
        </main>
    );
}