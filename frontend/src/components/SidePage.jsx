

export default function SidePage(props) {
    const { transcript } = props;

    return (
        <main className="flex flex-col gap-4 justify-center">
            <section className="flex flex-row gap-4 justify-center">
                <section className="flex flex-col justify-center min-w-[50%] m-4">
                    <h1 className="text-lg">Raw Text</h1>
                    <p>{ transcript }</p>
                </section>
                <section className="flex flex-col justify-center m-4">
                    <h1 className="text-lg">AI Text</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ea, delectus ex vel temporibus dolore suscipit repellat consectetur officiis non molestias hic reiciendis ab libero inventore maiores dolorum quia fugiat.</p>
                </section>
            </section>
        </main>
    )
}