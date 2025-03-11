import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <div className="container">
        <h1 style={{display: 'flex',margin:'20px'}}>Olx Card</h1>
      </div>
      <div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Card title='Stylish Table Lamp Perfect for Home' price='2500' description='good quality light with taiz roshni with long live' image='https://imagescdn.simons.ca/images/20992-24101256-11-A1_2/porous-concrete-table-lamp.jpg?__=3' />

            <Card title=' Lorem ipsum dolor sit amet consectetur adipisicing elit.' price='2000' description='good quality light with taiz roshni with long live' image='https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600' />

            <Card title=' Lorem ipsum dolor sit amet consectetur adipisicing elit.' price='2800' description='good quality light with taiz roshni with long live' image='https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg' />

            <Card title=' Lorem ipsum dolor sit amet consectetur adipisicing elit.' price='3000' description='good quality light with taiz roshni with long live' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmM83M7W3QqB_1WI9JexVQ4tba-pRKUI__IQ&s' />

            <Card title=' Lorem ipsum dolor sit amet consectetur adipisicing elit.' price='22000' description='good quality light with taiz roshni with long live' image='https://img.pikbest.com/origin/06/58/41/96mpIkbEsTMx7.jpg!w700wp' />

            <Card title=' Lorem ipsum dolor sit amet consectetur adipisicing elit.' price='2000' description='good quality light with taiz roshni with long live' image='https://imagescdn.simons.ca/images/20992-24101256-11-A1_2/porous-concrete-table-lamp.jpg?__=3' />

            <Card title=' Lorem ipsum dolor sit amet consectetur adipisicing elit.' price='40000' description='good quality light with taiz roshni with long live' image='https://img.freepik.com/premium-psd/limited-offer-12-12-sale-social-media-post-template_122059-1021.jpg?semt=ais_hybrid' />
          </div>
      </div>
    </>
  )
}

export default App
