import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';



ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Police Crime Statistics',
        },
    },
};

// Convert crime data into chart.js format
const labels = ['Theft', 'Burglary', 'Assault', 'Fraud', 'Vandalism', 'Drug Offenses', 'Homicide'];

const crimeData1 = [120, 80, 50, 40, 60, 30, 10];
const crimeData2 = [100, 70, 40, 30, 50, 25, 5];
const crimeData3 = [130, 90, 60, 50, 70, 35, 15];

export const data = {
    labels,
    datasets: [
        {
            label: 'City A',
            data: crimeData1,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'City B',
            data: crimeData2,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
        },
        {
            label: 'City C',
            data: crimeData3,
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
        },
    ],
};

export default function CrimeGraph() {
    return (
        <div style={{ width: '80%', margin: '0 auto' }}>
            <Bar options={options} data={data} />
        </div>
    );
}