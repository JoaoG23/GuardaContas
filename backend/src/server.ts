import app from './app';

app.listen(process.env.PORT_SERVER || 3000, () => {
    console.info(`🌍 Server running port ${process.env.PORT_SERVER}`)
});