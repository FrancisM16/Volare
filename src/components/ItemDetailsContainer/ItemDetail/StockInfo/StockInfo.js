export const StockInfo = ({stock}) => {
    return (
        <div className="font-semibold">
            {
                stock === 1
                    ? "Queda solo una unidad"
                    : `Queda solo ${stock} unidades`
            }
        </div>
    )
}