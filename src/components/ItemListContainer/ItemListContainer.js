export const ItemListContainer = ({ greeting }) => {
    return (
        <article className="container mx-auto mt-4 font-default text-xl">
            <h1> {greeting} <span className="text-indigo-500">a Volare</span></h1>
        </article>
    )
}