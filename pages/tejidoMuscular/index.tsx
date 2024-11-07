import Head from "next/head";
import Link from "next/link";

export default function MuscleTissue() {
  return (
    <div className="container">
      <Head>
        <title>TEJIDO MUSCULAR - MediTech</title>
      </Head>

      <main className="main-content muscle-tissue">
        <header className="muscle-header">
          <h1 className="muscle-title">TEJIDO MUSCULAR</h1>
          <p className="muscle-description">
            El tejido muscular cumple funciones esenciales como la contracción,
            generación de fuerza y respuesta a estímulos. Está compuesto por fibras,
            sarcómeros y otras estructuras que permiten su correcto funcionamiento.
          </p>
        </header>

        <section>
          <h2 className="section-title">Funciones</h2>
          <ul className="function-list">
            <li className="function-item">Contracción y relajación.</li>
            <li className="function-item">Generación de fuerza.</li>
            <li className="function-item">Elasticidad y resistencia.</li>
            <li className="function-item">Inervación y vascularización para recibir estímulos y nutrientes.</li>
          </ul>
          </section>
          
          <section>
          <div className="components-section">
            <div className="component-card">
              <img src="/images/9.jpeg" alt="Imagen de tejido muscular" className="section-image" />
            </div>
            <div className="component-card">
              <img src="/images/10.jpeg" alt="Imagen de tejido muscular" className="section-image" />
            </div>
          </div>
        </section>
        

        <section>
          <h2 className="section-title">Componentes</h2>
          <div className="components-section">
            <div className="component-card">
              <h3 className="component-title">Componentes Principales</h3>
              <p className="component-description">
                <strong>Fibras musculares:</strong> Unidades celulares que pueden ser unitarias o multinucleadas.
              </p>
              <p className="component-description">
                <strong>Sarcómeros:</strong> Unidades contráctiles responsables del acortamiento muscular.
              </p>
              <p className="component-description">
                <strong>Miofibrillas:</strong> Conjunto de sarcómeros alineados en serie.
              </p>
              <p className="component-description">
                <strong>Sarcoplasma:</strong> Citoplasma de las fibras musculares.
              </p>
              <p className="component-description">
                <strong>Sarcolema:</strong> Membrana plasmática que rodea las fibras musculares.
              </p>
              <img src="/images/11.jpeg" alt="Imagen de tejido muscular" className="section-image" />
            </div>
          </div>
        </section>

        <section>
          <h2 className="section-title">Tipos de Tejido Muscular</h2>
          <ul className="function-list">
          <p className="component-description">
                <strong>El tejido muscular se clasifica en tres tipos:</strong>
              </p>
          </ul>
        </section>

        <section>
          <div className="components-section">
            <div className="component-card">
              <h3 className="component-title">Tejido muscular esquelético (voluntario)</h3>
              <ul className="component-description">
                <li>Fibras largas y multinucleadas.</li>
                <li>Contracción rápida y fuerte..</li>
                <li>Ejemplos: músculos del esqueleto.</li>
              </ul>
              <img src="/images/12.jpeg" alt="Imagen de tejido muscular" className="section-image" />
            </div>
            <div className="component-card">
              <h3 className="component-title">Tejido muscular liso (involuntario):</h3>
              <ul className="component-description">
                <li>Fibras cortas y uninucleadas.</li>
                <li>Contracción lenta y sostenida.</li>
                <li>Ejemplos: músculos del intestino, vasos sanguíneos.</li>
              </ul>
              <img src="/images/13.jpeg" alt="Imagen de tejido muscular" className="section-image" />
              <img src="/images/14.jpeg" alt="Imagen de tejido muscular" className="section-image" />
            </div>

            <div className="component-card">
              <h3 className="component-title">Tejido muscular cardíaco (involuntario):</h3>
              <ul className="component-description">
                <li>Fibras ramificadas y multinucleadas.</li>
                <li>Contracción rítmica y sostenida.</li>
                <li>Ejemplos: músculo cardíaco.</li>
              </ul>
              <img src="/images/15.jpeg" alt="Imagen de tejido muscular" className="section-image" />
            </div>
          </div>
        </section>

        
        <section>
          <h2 className="section-title">Estructuras Importantes Asociadas</h2>
          <ul className="function-list">
          <p className="component-description">
                <strong>Tendones:</strong> Conectan el músculo al hueso.
              </p>
              <p className="component-description">
                <strong>Ligamentos:</strong> Conectan hueso con hueso.
              </p>
              <p className="component-description">
                <strong>Fascias:</strong> Capas de tejido conectivo que rodean los músculos y los separan.
              </p>
          </ul>
          </section>
          
          <section>
          <div className="components-section">
            <div className="component-card">
              <img src="/images/16.jpeg" alt="Imagen de tejido muscular" className="section-image" />
            </div>
            <div className="component-card">
              <img src="/images/17.jpeg" alt="Imagen de tejido muscular" className="section-image" />
            </div>
            <div className="component-card">
              <img src="/images/18.jpeg" alt="Imagen de tejido muscular" className="section-image" />
            </div>
          </div>
        </section>
        
        <Link href="/" className="button">Volver al inicio</Link>
      </main>
    </div>
  );
}
