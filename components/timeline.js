class CustomTimeline extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    padding: 6rem 0;
                    background-color: #f9fafb;
                }
                .container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 2rem;
                }
                .section-header {
                    text-align: center;
                    margin-bottom: 4rem;
                }
                .section-title {
                    font-size: 2.25rem;
                    font-weight: 800;
                    color: #1f2937;
                    margin-bottom: 1rem;
                }
                .section-subtitle {
                    font-size: 1.125rem;
                    color: #4b5563;
                    max-width: 600px;
                    margin: 0 auto;
                }
                .timeline {
                    position: relative;
                    max-width: 800px;
                    margin: 0 auto;
                }
                .timeline::before {
                    content: '';
                    position: absolute;
                    width: 2px;
                    background-color: #e5e7eb;
                    top: 0;
                    bottom: 0;
                    left: 50%;
                    margin-left: -1px;
                }
                .timeline-item {
                    padding: 1rem 0;
                    position: relative;
                    width: 50%;
                    box-sizing: border-box;
                }
                .timeline-item:nth-child(odd) {
                    left: 0;
                    padding-right: 3rem;
                    text-align: right;
                }
                .timeline-item:nth-child(even) {
                    left: 50%;
                    padding-left: 3rem;
                }
                .timeline-dot {
                    position: absolute;
                    width: 1rem;
                    height: 1rem;
                    border-radius: 50%;
                    background-color: #3b82f6;
                    top: 2rem;
                }
                .timeline-item:nth-child(odd) .timeline-dot {
                    right: -0.5rem;
                }
                .timeline-item:nth-child(even) .timeline-dot {
                    left: -0.5rem;
                }
                .timeline-content {
                    padding: 1.5rem;
                    background-color: white;
                    border-radius: 0.5rem;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
                }
                .timeline-week {
                    font-weight: 600;
                    color: #3b82f6;
                    margin-bottom: 0.5rem;
                }
                .timeline-title {
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: #1f2937;
                    margin-bottom: 0.5rem;
                }
                .timeline-description {
                    color: #4b5563;
                    line-height: 1.6;
                }
                .timeline-tools {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    margin-top: 1rem;
                }
                .tool-badge {
                    background-color: #e5e7eb;
                    color: #1f2937;
                    padding: 0.25rem 0.5rem;
                    border-radius: 0.25rem;
                    font-size: 0.75rem;
                    font-weight: 500;
                }
                @media (max-width: 768px) {
                    .timeline::before {
                        left: 2rem;
                    }
                    .timeline-item {
                        width: 100%;
                        padding-left: 3rem;
                        padding-right: 0;
                        text-align: left;
                    }
                    .timeline-item:nth-child(odd),
                    .timeline-item:nth-child(even) {
                        left: 0;
                        padding-right: 0;
                        padding-left: 3rem;
                        text-align: left;
                    }
                    .timeline-item:nth-child(odd) .timeline-dot,
                    .timeline-item:nth-child(even) .timeline-dot {
                        left: 1.5rem;
                    }
                }
            </style>
            <div class="container" id="timeline">
                <div class="section-header">
                    <h2 class="section-title">15-Week Curriculum</h2>
                    <p class="section-subtitle">From Linux basics to AI integration - a complete learning journey</p>
                </div>
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <div class="timeline-week">Weeks 1-2</div>
                            <h3 class="timeline-title">Big Data & Linux Fundamentals</h3>
                            <p class="timeline-description">Master essential Linux commands and understand distributed systems concepts.</p>
                            <div class="timeline-tools">
                                <span class="tool-badge">Bash</span>
                                <span class="tool-badge">tmux</span>
                                <span class="tool-badge">SSH</span>
                            </div>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <div class="timeline-week">Week 3</div>
                            <h3 class="timeline-title">Distributed Storage</h3>
                            <p class="timeline-description">Learn about object storage and distributed file systems.</p>
                            <div class="timeline-tools">
                                <span class="tool-badge">MinIO</span>
                                <span class="tool-badge">Ceph</span>
                            </div>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <div class="timeline-week">Week 4</div>
                            <h3 class="timeline-title">Data Lake Formats</h3>
                            <p class="timeline-description">Understand modern table formats for data lakes.</p>
                            <div class="timeline-tools">
                                <span class="tool-badge">Delta Lake</span>
                                <span class="tool-badge">Iceberg</span>
                                <span class="tool-badge">Hudi</span>
                            </div>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <div class="timeline-week">Weeks 5-6</div>
                            <h3 class="timeline-title">Processing Engines</h3>
                            <p class="timeline-description">Master distributed computation frameworks.</p>
                            <div class="timeline-tools">
                                <span class="tool-badge">Spark</span>
                                <span class="tool-badge">Polars</span>
                                <span class="tool-badge">PySpark</span>
                            </div>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <div class="timeline-week">Week 7</div>
                            <h3 class="timeline-title">Query Federation</h3>
                            <p class="timeline-description">Learn to query across multiple data sources.</p>
                            <div class="timeline-tools">
                                <span class="tool-badge">Trino</span>
                                <span class="tool-badge">Hive</span>
                            </div>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <div class="timeline-week">Week 8</div>
                            <h3 class="timeline-title">Workflow Orchestration</h3>
                            <p class="timeline-description">Automate and schedule data pipelines.</p>
                            <div class="timeline-tools">
                                <span class="tool-badge">Airflow</span>
                                <span class="tool-badge">Prefect</span>
                            </div>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <div class="timeline-week">Weeks 9-10</div>
                            <h3 class="timeline-title">Stream Processing</h3>
                            <p class="timeline-description">Process data in real-time.</p>
                            <div class="timeline-tools">
                                <span class="tool-badge">Kafka</span>
                                <span class="tool-badge">RisingWave</span>
                            </div>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <div class="timeline-week">Weeks 11-14</div>
                            <h3 class="timeline-title">Lakehouse Project</h3>
                            <p class="timeline-description">Build a complete AI-ready lakehouse from scratch.</p>
                            <div class="timeline-tools">
                                <span class="tool-badge">MLflow</span>
                                <span class="tool-badge">Feast</span>
                                <span class="tool-badge">Milvus</span>
                            </div>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <div class="timeline-week">Week 15</div>
                            <h3 class="timeline-title">Future Trends</h3>
                            <p class="timeline-description">Explore emerging technologies in data engineering.</p>
                            <div class="timeline-tools">
                                <span class="tool-badge">DuckDB</span>
                                <span class="tool-badge">Llama.cpp</span>
                                <span class="tool-badge">Rust</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define('custom-timeline', CustomTimeline);
