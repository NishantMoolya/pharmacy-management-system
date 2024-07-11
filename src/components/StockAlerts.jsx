/* eslint-disable react/prop-types */
export default function StockAlerts({ stockData }) {
    return (
        <main>
            <div className="bg-transparent text-center justify-center w-60 px-5 py-3 ml-5 h-60 content-center border-2 border-blue-500 rounded-lg hover:bg-blue-400 hover:text-white transition-all 0.3s ease-in">
                {stockData.map(stock => {
                    return (
                        <div key={stock.id} className="stock-alerts">
                            <h2>{stock.stock}</h2>
                            <p>{stock.units}</p>
                            <p>{stock.description}</p>
                        </div>
                    );
                })}
            </div>
        </main>
    )
}