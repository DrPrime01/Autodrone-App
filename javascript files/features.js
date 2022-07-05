class Features extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="feat1">
                <div class="title">
                        <h3>Drone Light 1</h3>
                        <span>Super fast, easy control drone</span>
                        <h2>$ 4,500.00</h2>
                    </div>
                    <div class="features">
                        <h4>Drone features:</h4>
                        <div><img src="/AutoDrone Images/cam vector.svg" alt="cam vector" /> 4K Camera Resolution</div>
                        <div><img src="/AutoDrone Images/vector11.png" alt="storage vector" /> 2 TB Storage</div>
                        <div><img src="/AutoDrone Images/Vector12.png" alt="speed" /> 60 m/s Speed</div>
                        <div><img src="/AutoDrone Images/Vector14.png" alt="battery" /> 5000 mAh Battery</div>
                    </div>
                    <div class="orderBtn">
                        <button type="submit" class="getNowBtn">Order It Now</button>
                    </div>
            </div>
        );
    }
};
ReactDOM.render(<Features />, document.getElementById("drone1PF"));