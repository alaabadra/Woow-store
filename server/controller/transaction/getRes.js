module.exports=(request,response)=>{
    // const handelSearch = (request, response) => {
    const requests=require('request');
    const {requestModule}  = require('./requestModule')
  var token = '7Fs7eBv21F5xAocdPvvJ-sCqEyNHq4cygJrQUFvFiWEexBUPs4AkeLQxH4pzsUrY3Rays7GVA6SojFCz2DMLXSJVqk8NG-plK-cZJetwWjgwLPub_9tQQohWLgJ0q2invJ5C5Imt2ket_-JAlBYLLcnqp_WmOfZkBEWuURsBVirpNQecvpedgeCx4VaFae4qWDI_uKRV1829KCBEH84u6LYUxh8W_BYqkzXJYt99OlHTXHegd91PLT-tawBwuIly46nwbAs5Nt7HFOozxkyPp8BW9URlQW1fE4R_40BXzEuVkzK3WAOdpR92IkV94K_rDZCPltGSvWXtqJbnCpUB6iUIn1V-Ki15FAwh_nsfSmt_NQZ3rQuvyQ9B3yLCQ1ZO_MGSYDYVO26dyXbElspKxQwuNRot9hi3FIbXylV3iN40-nCPH4YQzKjo5p_fuaKhvRh7H8oFjRXtPtLQQUIDxk-jMbOp7gXIsdz02DrCfQIihT4evZuWA6YShl6g8fnAqCy8qRBf_eLDnA9w-nBh4Bq53b1kdhnExz0CMyUjQ43UO3uhMkBomJTXbmfAAHP8dZZao6W8a34OktNQmPTbOHXrtxf6DS-oKOu3l79uX_ihbL8ELT40VjIW3MJeZ_-auCPOjpE3Ax4dzUkSDLCljitmzMagH2X8jN8-AYLl46KcfkBV' //token value to be placed here;
        let allData = '';
        request.on('data', (chank) => {
          allData += chank;
        });
        request.on('end', () => {
          var baseURL = 'https://apitest.myfatoorah.com';
      
          const options = {
            method: 'POST',
            url: baseURL + '/v2/GetPaymentStatus',
            headers:
            {
              Accept: 'application/json',
              Authorization: 'Bearer ' + token,
              'Content-Type': 'application/json'
            },
            body:JSON.stringify
            ({

                paymentId:'0505901225865051',
                keyType:'paymentId'
            }
            )
      
          };
          requestModule(options, (error, res, body) => {
            if (error) {
              response.writeHead(500, { 'content-type': 'text/html' });
              response.end('<h1>internal server error </h1>');
            } else {
              response.writeHead(200, { 'content-type': 'application/json' });
              console.log('resssss',res);
              
            //   response.end(JSON.stringify(body));
            }
          });
        });
    // }
}