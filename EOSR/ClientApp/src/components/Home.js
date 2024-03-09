import React, { Component } from 'react';
import './Home.css'; // Assuming you have a corresponding CSS file for styling

export class Home extends Component {
    static displayName = Home.name;

    // Placeholder data - eventually this will come from your backend
    state = {
        reports: [
            { id: 1, date: '2024-03-08', content: 'Report content for March 8th...' },
            { id: 2, date: '2024-03-07', content: 'Report content for March 7th...' },
            { id: 1, date: '2024-03-08', content: 'Report content for March 9th...' },
            { id: 2, date: '2024-03-07', content: 'Report content for March 10th...' },
            { id: 1, date: '2024-03-08', content: 'Report content for March 8th...' },
            { id: 2, date: '2024-03-07', content: 'Report content for March 7th...' },
            { id: 1, date: '2024-03-08', content: 'Report content for March 9th...' },
            { id: 2, date: '2024-03-07', content: 'Report content for March 10th...' }
            // ...more reports
        ]
    };

    renderReport = (report) => {
        return (
            <div key={report.id} className="report">
                <h3>{report.date}</h3>
                <p>{report.content}</p>
            </div>
        );
    };

    render() {
        const { reports } = this.state;

        return (
            <div className="home-container">
                <h1></h1>
                {/* ...other components like navigation... */}

                <div className="timeline">
                    {reports.map(this.renderReport)}
                </div>

                {/* ...footer... */}
            </div>
        );
    }
}
