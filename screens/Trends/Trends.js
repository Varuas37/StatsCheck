import React from 'react'
import {View,Text,ScrollView} from "react-native";
import Center from '../../components/Center/Center';
import { BarChart, Grid,XAxis,YAxis } from 'react-native-svg-charts'

export default function Trends() {
    const fill = 'red'
    const data = [50, 10, 40, 95, -4, -24, 85, 50, 35, 53, -53, 24, 50, -20, -80]
    const contentInset = { top: 60, bottom: 9 }

    return (
        <ScrollView style={{ backgroundColor: "black" }}>
             <YAxis
                    data={data}
                    contentInset={contentInset}
                    svg={{
                        fill: 'white',
                        fontSize: 10,
                    }}
                    numberOfTicks={10}
                    formatLabel={(value) => `${value}ºC`}
                />
             <BarChart style={{ height: 200 ,marginLeft:16, flex:1}} data={data} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
                <Grid />
            </BarChart>
            <XAxis
                    style={{ marginHorizontal: -10 }}
                    data={data}
                    formatLabel={(value, index) => index}
                    contentInset={{ left: 10, right: 10 }}
                    svg={{ fontSize: 10, fill: 'white' }}
                />
        </ScrollView>
    )
}
