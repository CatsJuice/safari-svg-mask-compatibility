import rectMaskRaw from '../public/rect-mask.svg?raw';
import rectRaw from '../public/rect.svg?raw';

function App() {
  const style = { width: '200px', height: '200px' }
  const getBgStyle = (filename: string) => ({
    backgroundImage: `url(${filename})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  })

  return (
    <div className="app">
      <div className="case">
        <img style={style} src="/rect.svg" />
        <div className="label">img tag: svg without mask</div>
      </div>
      <div className="case">
        <img style={style} src="/rect-mask.svg" />
        <div className="label">img tag: svg with mask</div>
      </div>


      <div className="case">
        <div style={{
          ...style,
          ...getBgStyle('/rect.svg')
        }}></div>
        <div className="label">css background: svg without mask</div>
      </div>

      <div className="case">
        <div style={{
          ...style,
          ...getBgStyle('/rect-mask.svg')
        }}></div>
        <div className="label">css background: svg with mask</div>
      </div>

      <div className="case">
        <div style={style} dangerouslySetInnerHTML={{ __html: rectRaw }}></div>
        <div className="label">innerHtml: svg without mask</div>
      </div>

      <div className="case">
        <div style={style} dangerouslySetInnerHTML={{ __html: rectMaskRaw }}></div>
        <div className="label">innerHtml: svg with mask</div>
      </div>
    </div>
  )
}

export default App
