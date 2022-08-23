const Card = () => {
    return (
        <div className="card card-statistic-2">
            <div className="card-chart">
                <canvas id="balance-chart" height="80"></canvas>
            </div>
            <div className="card-icon shadow-primary bg-primary">
                <i className="fas fa-archive"></i>
            </div>
            <div className="card-wrap">
                <div className="card-header">
                    <h4>Total Orders</h4>
                </div>
                <div className="card-body">
                    59
                </div>
            </div>
        </div>
    );
}

export default Card;