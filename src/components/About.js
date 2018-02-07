import React from 'react';

class About extends React.Component {
  render() {
    return(
      <div style={styles.padding}> 
      <div style={styles.content}>
        <h1> ABOUT YKNOT BOWTIES </h1>
        <br />
        <p> 
        Celebrating the spirit of “MOTTAINAI” a Japanese concept embodying the waste-not philosophy, 
        Yknot Bowties started in 2009 under the “bowties by yurie” name. The initial inspiration came 
        from menswear worn in Williamsburg around the time, coupled with an extensive t-shirt collection begging to be salvaged.
        </p>
        <br /> 
        <p> 
        Picking up fabrics through travel as well as from living on multiple islands in the Pacific from 
        Okinawa, Saipan, and finally Hawaii, YKnot Bowties is deeply rooted in designer 
        Yurie’s day to day experiences and esthetic. Each bowtie is handmade with the spirit of love and goodwill.
        </p>
        <br />
        <p>
        Yknot Bowties hopes that those who wear their bowties will be empowered to be their true selves while 
        expressing their distinct sense of style.
        </p>
      </div> 
      </div>
    )
  }
}

const styles = {
  content : {
    width: '50%',
    backgroundColor: 'white',
    padding: '5%'
  },
  padding : {
    padding : '5% 10% 15% 5%',
  },
}
export default About