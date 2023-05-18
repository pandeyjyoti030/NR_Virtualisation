import React from 'react';
import {LineChart, SparklineChart, PieChart} from "nr1";

export default class JyotiNerdlet extends React.Component {
  render() {
    return <>
    <p style={{color: "white", padding:"10px", alignitem:"center", background:"blue", fontSize:"25px", textAlign:"center"}}>LineChart</p>
    <LineChart style={{width:"90%", height:"95%"}}
    accountId = {3930396}
    query = "SELECT average(host.cpuPercent) AS 'CPU used %' FROM Metric WHERE `entityGuid` = 'MzkzMDM5NnxJTkZSQXxOQXwxMTM5NTgxOTk5OTA1MjE1ODg5' TIMESERIES auto"
    fullWidth
    fullHeight
    />
    
    <p style={{color: "white", padding:"10px" , alignitem:"center", background:"blue", fontSize:"20px", textAlign:"center"}}>Pie-Chart</p>
    <PieChart
    accountId = {3930396}
    query = "SELECT average(host.loadAverageOneMinute) as '1 minute', average(host.loadAverageFiveMinute) AS '5 minutes', average(host.loadAverageFifteenMinute) AS '15 minutes' FROM Metric WHERE `entityGuid` = 'MzkzMDM5NnxJTkZSQXxOQXwxMTM5NTgxOTk5OTA1MjE1ODg5' TIMESERIES auto"
    fullWidth
    fullHeight
    />

<p style={{color: "white", padding:"10px" , alignitem:"center", background:"blue", fontSize:"20px", textAlign:"center"}}>Network traffic</p>
    <PieChart
    accountId = {3930396}
    query = "SELECT average(host.net.transmitBytesPerSecond) AS 'Transmit bytes per second', average(host.net.receiveBytesPerSecond) AS 'Receive bytes per second' FROM Metric WHERE `entityGuid` = 'MzkzMDM5NnxJTkZSQXxOQXwxMTM5NTgxOTk5OTA1MjE1ODg5' TIMESERIES auto"
    fullWidth
    fullHeight
    />

    </>;
  }
}