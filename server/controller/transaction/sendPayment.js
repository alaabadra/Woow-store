
// console.log('#################### Send Payment (Offline) ########################');
var request = require("request");
module.exports = (req, res) => {

  var token = '7Fs7eBv21F5xAocdPvvJ-sCqEyNHq4cygJrQUFvFiWEexBUPs4AkeLQxH4pzsUrY3Rays7GVA6SojFCz2DMLXSJVqk8NG-plK-cZJetwWjgwLPub_9tQQohWLgJ0q2invJ5C5Imt2ket_-JAlBYLLcnqp_WmOfZkBEWuURsBVirpNQecvpedgeCx4VaFae4qWDI_uKRV1829KCBEH84u6LYUxh8W_BYqkzXJYt99OlHTXHegd91PLT-tawBwuIly46nwbAs5Nt7HFOozxkyPp8BW9URlQW1fE4R_40BXzEuVkzK3WAOdpR92IkV94K_rDZCPltGSvWXtqJbnCpUB6iUIn1V-Ki15FAwh_nsfSmt_NQZ3rQuvyQ9B3yLCQ1ZO_MGSYDYVO26dyXbElspKxQwuNRot9hi3FIbXylV3iN40-nCPH4YQzKjo5p_fuaKhvRh7H8oFjRXtPtLQQUIDxk-jMbOp7gXIsdz02DrCfQIihT4evZuWA6YShl6g8fnAqCy8qRBf_eLDnA9w-nBh4Bq53b1kdhnExz0CMyUjQ43UO3uhMkBomJTXbmfAAHP8dZZao6W8a34OktNQmPTbOHXrtxf6DS-oKOu3l79uX_ihbL8ELT40VjIW3MJeZ_-auCPOjpE3Ax4dzUkSDLCljitmzMagH2X8jN8-AYLl46KcfkBV' //token value to be placed here;
  var baseURL = 'https://apitest.myfatoorah.com';

  console.log('#################### ExecutePayment ########################');

  var options = {
    method: 'POST',
    url: baseURL + '/v2/ExecutePayment',
    headers:
    {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json'
    },
    body:
    {
      PaymentMethodId: '2',
      CustomerName: 'Ahmed',
      DisplayCurrencyIso: 'KWD',
      MobileCountryCode: '+965',
      CustomerMobile: '92249038',
      CustomerEmail: 'aramadan@myfatoorah.com',
      InvoiceValue: 100,
      CallBackUrl: 'https://127.0.0.1/get-res',
      ErrorUrl: 'https://google.com',
      Language: 'en',
      CustomerReference: 'ref 1',
      CustomerCivilId: 12345678,
      UserDefinedField: 'Custom field',
      ExpireDate: '',
      CustomerAddress:
      {
        Block: '',
        Street: '',
        HouseBuildingNo: '',
        Address: '',
        AddressInstructions: ''
      },
      InvoiceItems: [{ ItemName: 'Product 01', Quantity: 1, UnitPrice: 100 }]
    },
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);

  });
  let paymentId='0505899375855053';
  let Id = '0505899375855053';
  const response = (id, idPay)=>{

  }
}