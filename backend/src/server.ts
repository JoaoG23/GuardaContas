import app from './app';

app.listen(process.env.PORT_SERVER || 3000, () => {
    console.info(`🌍 Servidor rodando na porta  ${process.env.PORT_SERVER}`)
});