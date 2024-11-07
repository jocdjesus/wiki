import Head from "next/head";
import Link from "next/link";

export default function ConnectiveTissue() {
  return (
    <div className="container">
      <Head>
        <title>TEJIDO CONJUNTIVO - MediTech</title>
      </Head>

      <main className="main-content connective-tissue">
        <header className="connective-header">
          <h1 className="connective-title">TEJIDO CONJUNTIVO</h1>
          <p className="connective-description">
            El tejido conjuntivo cumple funciones vitales para el cuerpo humano,
            proporcionando soporte, protección y almacenamiento de nutrientes,
            además de jugar un papel en la reparación y la respuesta inmunológica.
          </p>
        </header>

        <section>
          <h2 className="section-title">Función</h2>
          <ul className="function-list">
            <li className="function-item">Dar soporte estructural y protección a los órganos.</li>
            <li className="function-item">Conectar otros tejidos.</li>
            <li className="function-item">Participar en el almacenamiento de nutrientes.</li>
            <li className="function-item">Facilitar la reparación de tejidos.</li>
            <li className="function-item">Intervenir en la respuesta inmunológica.</li>
          </ul>
          <img src="/images/1.jpeg" alt="Imagen de tejido muscular" className="section-image" />
        </section>

        <section>
          <h2 className="section-title">Componentes</h2>
          <div className="components-section">
            <div className="component-card">
              <h3 className="component-title">Células</h3>
              <ul className="component-description">
                <li>Fibroblastos: Producen fibras y matriz extracelular.</li>
                <li>Macrófagos: Participan en la defensa del organismo.</li>
                <li>Mastocitos: Liberan histamina en respuestas inmunológicas.</li>
                <li>Adipocitos: Almacenan grasa.</li>
              </ul>
              <img src="/images/2.jpeg" alt="Imagen de tejido muscular" className="section-image" />
            </div>
            <div className="component-card">
              <h3 className="component-title">Matriz Extracelular</h3>
              <p className="component-description">
                <strong>Sustancia fundamental:</strong> Gel de proteínas y azúcares.
              </p>
              <img src="/images/3.jpeg" alt="Imagen de tejido muscular" className="section-image" />
            </div>

            <div className="component-card">
              <h3 className="component-title">Fibras</h3>
              <p className="component-description">
                <strong>Fibras de colágeno:</strong> Resistentes, aportan fuerza.
              </p>
              <img src="/images/4.jpeg" alt="Imagen de tejido muscular" className="section-image" />
            </div>

            <div className="component-card">
              <h3 className="component-title">Fibras</h3>
              <p className="component-description">
                <strong>Fibras elásticas:</strong> Aportan elasticidad.
              </p>
              <img src="/images/5.jpeg" alt="Imagen de tejido muscular" className="section-image" />
            </div>

            <div className="component-card">
              <h3 className="component-title">Fibras</h3>
              <p className="component-description">
                <strong>Fibras reticulares:</strong> Forman redes de soporte.
              </p>
              <img src="/images/6.jpeg" alt="Imagen de tejido muscular" className="section-image" />
            </div>

          </div>
        </section>

        <section>
          <h2 className="section-title">Importancia</h2>
          <ul className="importance-list">
            <li className="importance-item">Permite la unión de células y órganos.</li>
            <li className="importance-item">Facilita el intercambio de nutrientes y desechos.</li>
            <li className="importance-item">Es esencial para la reparación de heridas.</li>
            <li className="importance-item">Juega un papel clave en el sistema inmunológico.</li>
          </ul>
        </section>

        <section>
          <h2 className="section-title">Clasificación</h2>
           <ul className="function-list">
            <li className="function-item">El tejido conjuntivo se clasifica según su composición y función en:</li>
          </ul>
          <div className="components-section">
            <div className="component-card">
              <p className="component-description">
                <strong>Tejido conjuntivo laxo:</strong> Suelto y flexible; permite el paso de nutrientes.
              </p>
              <img src="/images/7.jpeg" alt="Imagen de tejido muscular" className="section-image" />
            </div>
          </div>

          <div className="components-section">
            <div className="component-card">
              <p className="component-description">
                <strong>Tejido conjuntivo denso:</strong> Más compacto y resistente, se encuentra en tendones y ligamentos.
              </p>
              <img src="/images/8.jpeg" alt="Imagen de tejido muscular" className="section-image" />
            </div>
          </div>

          <div className="components-section">
            <div className="component-card">
              <p className="component-description">
                <strong>Tejido especializado:</strong> Incluye el tejido adiposo, cartílago, hueso y sangre.
              </p>
              {/*<img src="/images/9.jpeg" alt="Imagen de tejido muscular" className="section-image" />*/}
            </div>
          </div>

        </section>

        <Link href="/" className="button">Volver al inicio</Link>
      </main>
    </div>
  );
}
