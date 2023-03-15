import { app } from "./app";

app.listen({
  host: '0.0.0.0', // acessivel para fronts
  port: 3333,
}).then(() => {
  console.log('🏃‍♀️ HTTP Server Running!')
})