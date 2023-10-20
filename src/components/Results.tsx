export default function Results({ results }: any) {
    return (
        <div>
            {results.map((result: any) => (
                <div>
                    {result.title || result.name}
                </div>
            ))}
        </div>
    )
}
