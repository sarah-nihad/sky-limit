import React, { Component } from 'react';

class Aboutahmed extends Component {
  render() {
    return (
      <div >
     
          <div  style={{paddingBottom:'5%',paddingTop:'1%',width:'100%',display:'flex',alignItems:'center',
        justifyContent:'center',flexDirection:'column',}}  >
            <div style={{marginTop:'2%',height:'150px',width:'85%',color:'#F8F9FA',borderRadius:'10px',
        paddingRight:'50px',fontSize:'30px',fontWeight:'600',display:'flex',alignItems:'center',
        backgroundImage:' linear-gradient(to right top, #09b495, #92278f)',direction:'rtl'}}  >
            عن الشركة 
</div>
            <div style={{minHeight:'300px',width:'85%',backgroundColor:'#F8F9FA',borderRadius:'10px',
        paddingTop:'2%',paddingBottom:'5%'}} >
            
              <div style={{fontSize:'25px',color:'#262626',paddingTop:'20px',paddingRight:'20px',fontWeight:'600',
          direction:'rtl',textAlign:'right'  }} > من نحن </div>
              <div  style={{fontSize:'20px',paddingTop:'20px',paddingRight:'20px',lineHeight:'20px',direction:'rtl',textAlign:'right'}}  >
              سوق الكتروني للسيارات يتيح لك البيع و الشراء من خلال نشر اعلانك و مشاهدة كافة العروض في كل المحافظات و مشاهدة عروض معارض السيارات بكل سهولة.
  </div>

  <div  style={{fontSize:'20px',paddingTop:'20px',paddingRight:'20px',lineHeight:'20px',direction:'rtl',textAlign:'right'}}  >
  ايضاً يوجد خدمات اضافية بكل ما يخص السيارات من مركز صيانة و محلات بيع قطع الغيار للتسهيل على كل الاشخاص.
  </div>

            </div>

          </div>





        
      </div>
    );
  }
}

export default Aboutahmed;