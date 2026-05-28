
# 📊 Module 7 Assignment — Observability & CI/CD on AWS EC2

## 🚀 Project Overview

This repository demonstrates a complete AWS EC2 deployment with observability and automation.
The solution includes:
- a backend Node.js/Express application
- Prometheus and Node Exporter for metrics collection
- Grafana for dashboards
- GitHub Actions for CI/CD
- SMTP-based email alerting for critical events

---

## 🏗️ Architecture

1. GitHub repository
2. GitHub Actions CI/CD pipeline
3. AWS EC2 instance
4. Backend application (Node.js / Express)
5. Database layer (MongoDB / PostgreSQL)
6. Prometheus + Node Exporter
7. Grafana dashboards
8. Email alerts via SMTP

---

## ⚙️ Tech Stack

- Node.js / Express.js
- MongoDB / PostgreSQL
- AWS EC2
- GitHub Actions
- Prometheus
- Grafana
- Node Exporter
- Gmail SMTP

---

## 🌟 Features

- Deploy backend service to AWS EC2
- Integrate database support
- Automate deployment with GitHub Actions
- Monitor host metrics: CPU, RAM, disk, network
- Collect metrics through Prometheus
- Visualize metrics in Grafana
- Send email alerts for critical issues

---

## 🖥️ EC2 Networking

Open the following ports on the EC2 security group:

- `22` → SSH access
- `3000` → Backend application
- `3001` → Grafana UI
- `9090` → Prometheus UI
- `9100` → Node Exporter metrics

---

## 🚀 Backend Setup

```bash
git clone https://github.com/tawhid3482/Backend-Devops-Assignment.git
cd your-repo
npm install
npm start
```

Application URL:

`http://<EC2_IP>:3000`

---

## 📈 Monitoring Stack

### Node Exporter

Metrics endpoint:

`http://<EC2_IP>:9100/metrics`

### Prometheus configuration sample

```yaml
scrape_configs:
  - job_name: 'node'
    static_configs:
      - targets: ['localhost:9100']
```

### Grafana Dashboard

Access Grafana at:

`http://<EC2_IP>:3001`

Default login:

- Username: `admin`
- Password: `admin`

---

## 📩 Grafana Email Alerting

Update Grafana SMTP settings in `/etc/grafana/grafana.ini`:

```ini
[smtp]
enabled = true
host = smtp.gmail.com:587
user = tawhidulislam3482@gmail.com
password = YOUR_APP_PASSWORD
from_address = tawhidulislam3482@gmail.com
from_name = Grafana
skip_verify = true
```

Configure a Grafana contact point:

- Type: Email
- Recipient: `your-email@gmail.com`

Alerts trigger automatically when configured thresholds are exceeded.

---

## 🔄 CI/CD Pipeline

The GitHub Actions workflow deploys the application on every push to the `main` branch.
The pipeline includes:

- checkout code
- deploy via SSH to EC2
- install dependencies
- restart the application

Example workflow:

```yaml
name: Deploy to EC2

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Deploy via SSH
        uses: appleboy/ssh-action@v1.0.0
        with:
          host: ${{ secrets.EC2_HOST }}
          username: ubuntu
          key: ${{ secrets.EC2_KEY }}
          script: |
            cd app
            git pull origin main
            npm install
            pm2 restart all
```

---

## 🖼️ Screenshots

### EC2 Instance

![EC2](screenshot/ec2-a7.png)

### Backend Server

![Server running](screenshot/server-running-1.png)

### CI/CD Pipeline

![CI CD](screenshot/ci-cd.png)

### Prometheus

![prometheus](screenshot/prometheus-1.png)

### Node Exporter

![Node_ex](screenshot/node-ex.png)

### Grafana Dashboard

![Grafana Dashboard](screenshot/grafana-mail-send.png)

### Grafana Email Alert

![Grafana mail](screenshot/grafana-mail-send.png)

![Grafana mail](screenshot/mail-send.png)

---

## 🧠 Learning Outcomes

- AWS EC2 deployment
- CI/CD automation with GitHub Actions
- System monitoring with Prometheus and Grafana
- Metrics collection using Node Exporter
- Email alerting using SMTP
- End-to-end DevOps pipeline setup

---

## ✅ Final Status

- Backend Deployment: ✅
- Database Setup: ✅
- CI/CD Pipeline: ✅
- Prometheus Monitoring: ✅
- Grafana Dashboard: ✅
- Node Exporter: ✅
- Email Alerts: ✅

---

## 🏁 Conclusion

This project implements a production-style observability and deployment pipeline on AWS EC2, combining monitoring, automation, and alerting for a reliable backend service.

