import { useState } from 'react'
import './App.css'

const products = [
  {
    id: 1,
    name: 'Cimento CP-II 50kg',
    price: 'R$ 42,90',
    category: 'Estrutural',
    img: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=260&fit=crop',
    videoId: 'dQw4w9WgXcQ',
  },
  {
    id: 2,
    name: 'Tijolo Cerâmico 8 Furos',
    price: 'R$ 1,39',
    category: 'Alvenaria',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=260&fit=crop',
    videoId: null,
  },
  {
    id: 3,
    name: 'Areia Lavada (m³)',
    price: 'R$ 159,00',
    category: 'Agregados',
    img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=260&fit=crop',
    videoId: null,
  },
  {
    id: 4,
    name: 'Brita Nº 1 (m³)',
    price: 'R$ 174,00',
    category: 'Agregados',
    img: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=260&fit=crop',
    videoId: null,
  },
  {
    id: 5,
    name: 'Tinta Acrílica 18L',
    price: 'R$ 319,90',
    category: 'Acabamento',
    img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=260&fit=crop',
    videoId: null,
  },
  {
    id: 6,
    name: 'Argamassa AC-II 20kg',
    price: 'R$ 26,90',
    category: 'Revestimento',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=260&fit=crop',
    videoId: null,
  },
  {
    id: 7,
    name: 'Piso Porcelanato 84x84',
    price: 'R$ 89,90/m²',
    category: 'Pisos',
    img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=260&fit=crop',
    videoId: null,
  },
  {
    id: 8,
    name: 'Telha Ondulada 2,44m',
    price: 'R$ 77,50',
    category: 'Cobertura',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=260&fit=crop',
    videoId: null,
  },
  {
    id: 9,
    name: 'Vergalhão CA-50 12mm',
    price: 'R$ 8,90/m',
    category: 'Estrutural',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=260&fit=crop',
    videoId: null,
  },
  {
    id: 10,
    name: 'Impermeabilizante 18L',
    price: 'R$ 189,00',
    category: 'Vedação',
    img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=260&fit=crop',
    videoId: null,
  },
  {
    id: 11,
    name: 'Porta de Madeira 80cm',
    price: 'R$ 420,00',
    category: 'Esquadrias',
    img: 'https://images.unsplash.com/photo-1558618047-f4e90e8a4507?w=400&h=260&fit=crop',
    videoId: null,
  },
  {
    id: 12,
    name: 'Tubo PVC 100mm 6m',
    price: 'R$ 58,90',
    category: 'Hidráulica',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=260&fit=crop',
    videoId: null,
  },
]

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=500&fit=crop',
    alt: 'Fachada da loja FAZCASA',
    label: 'Nossa fachada',
  },
  {
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop',
    alt: 'Interior da loja',
    label: 'Nosso depósito',
  },
  {
    src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop',
    alt: 'Equipe FAZCASA',
    label: 'Nossa equipe',
  },
]

function ProductCard({ product }) {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <article className="product-card">
      <div className="product-media">
        {showVideo && product.videoId ? (
          <iframe
            className="product-iframe"
            src={`https://www.youtube.com/embed/${product.videoId}?autoplay=1`}
            title={`Vídeo ${product.name}`}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <img
            src={product.img}
            alt={product.name}
            className="product-img"
            loading="lazy"
          />
        )}
        {product.videoId && (
          <button
            className="video-toggle"
            type="button"
            onClick={() => setShowVideo((v) => !v)}
          >
            {showVideo ? '📷 Ver foto' : '▶ Ver vídeo'}
          </button>
        )}
      </div>
      <span className="tag">{product.category}</span>
      <h3>{product.name}</h3>
      <p className="price">{product.price}</p>
      <button type="button" className="btn-orcamento">Adicionar ao orçamento</button>
    </article>
  )
}

export default function App() {
  const [activeGallery, setActiveGallery] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site">
      {/* ── HEADER ── */}
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">FAZCASA</span>
          <p>Materiais de Construção LTDA.</p>
        </div>

        <button
          className="hamburger"
          type="button"
          aria-label="Menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>

        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
          <a href="#apresentacao" onClick={() => setMenuOpen(false)}>Apresentação</a>
          <a href="#compras"      onClick={() => setMenuOpen(false)}>Compras</a>
          <a href="#contato"      onClick={() => setMenuOpen(false)}>Contato</a>
        </nav>
      </header>

      <main>
        {/* ── APRESENTAÇÃO ── */}
        <section id="apresentacao" className="section">

          {/* Hero */}
          <div className="hero">
            <div className="hero-content">
              <p className="eyebrow">Construção com qualidade e confiança</p>
              <h1>Seu projeto começa na <span className="highlight">FAZCASA</span></h1>
              <p>
                Loja completa para obras e reformas com atendimento técnico especializado,
                entrega rápida e ampla variedade de produtos para todas as etapas da construção.
              </p>
              <div className="hero-ctas">
                <a href="#compras" className="button-primary">Ver Catálogo</a>
                <a href="#contato" className="button-outline">Fale Conosco</a>
              </div>
            </div>

            {/* Imagem principal da loja */}
            <div className="hero-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=900&h=600&fit=crop"
                alt="Loja de materiais de construção FAZCASA"
                className="hero-img"
              />
              <div className="hero-badge">
                <strong>+500</strong>
                <span>produtos</span>
              </div>
            </div>
          </div>

          {/* Vídeo institucional */}
          <div className="institutional-video">
            <div className="section-label">
              <span className="label-dot red" />
              Vídeo Institucional
            </div>
            <h2>Conheça nossa loja</h2>
            <p>Veja como a FAZCASA pode ajudar no seu projeto do início ao fim.</p>
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/ScMzIvxBSi4"
                title="Vídeo Institucional FAZCASA"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Galeria da loja */}
          <div className="gallery-section">
            <div className="section-label">
              <span className="label-dot yellow" />
              Galeria da Loja
            </div>
            <div className="gallery-grid">
              <div className="gallery-main">
                <img
                  src={galleryImages[activeGallery].src}
                  alt={galleryImages[activeGallery].alt}
                  className="gallery-main-img"
                />
                <span className="gallery-label">{galleryImages[activeGallery].label}</span>
              </div>
              <div className="gallery-thumbs">
                {galleryImages.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`gallery-thumb ${activeGallery === i ? 'active' : ''}`}
                    onClick={() => setActiveGallery(i)}
                  >
                    <img src={img.src} alt={img.alt} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Diferenciais */}
          <div className="features">
            {[
              { icon: '🏗️', title: 'Entrega Rápida', desc: 'Entregas para toda a região em até 24h.' },
              { icon: '🔧', title: 'Assessoria Técnica', desc: 'Profissionais prontos para te orientar.' },
              { icon: '💰', title: 'Melhores Preços', desc: 'Tabela competitiva com condições especiais.' },
              { icon: '📦', title: 'Grande Estoque', desc: 'Mais de 500 produtos sempre disponíveis.' },
            ].map((f) => (
              <div className="feature-card" key={f.title}>
                <span className="feature-icon">{f.icon}</span>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── COMPRAS ── */}
        <section id="compras" className="section">
          <div className="section-title">
            <div className="section-label">
              <span className="label-dot yellow" />
              Catálogo
            </div>
            <h2>Todos os Produtos</h2>
            <p>Escolha os itens e adicione ao orçamento. Entregamos em toda a região.</p>
          </div>
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* ── CONTATO ── */}
        <section id="contato" className="section contact">
          <div className="section-title">
            <div className="section-label">
              <span className="label-dot red" />
              Contato
            </div>
            <h2>Fale Conosco e Nos Visite</h2>
            <p>Estamos aqui para ajudar na sua obra. Entre em contato ou venha nos visitar!</p>
          </div>

          <div className="contact-grid">
            {/* Informações */}
            <div className="contact-info-card">
              <h3>📍 Informações da Loja</h3>
              <ul className="contact-list">
                <li>
                  <span className="contact-icon">📌</span>
                  <span>Av. Principal, 1500 — Centro, São Paulo/SP</span>
                </li>
                <li>
                  <span className="contact-icon">📞</span>
                  <a href="tel:+551140001234">(11) 4000-1234</a>
                </li>
                <li>
                  <span className="contact-icon">💬</span>
                  <a
                    href="https://wa.me/5511988881234"
                    target="_blank"
                    rel="noreferrer"
                  >
                    (11) 98888-1234 — WhatsApp
                  </a>
                </li>
                <li>
                  <span className="contact-icon">✉️</span>
                  <a href="mailto:contato@fazcasa.com.br">contato@fazcasa.com.br</a>
                </li>
                <li>
                  <span className="contact-icon">🕐</span>
                  <span>Seg–Sáb: 07h às 18h · Dom: 08h às 12h</span>
                </li>
              </ul>

              {/* Foto da loja no contato */}
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&h=350&fit=crop"
                alt="Interior da loja FAZCASA"
                className="contact-store-img"
              />
            </div>

            {/* Mapa */}
            <div className="map-wrapper">
              <h3>🗺️ Como chegar</h3>
              <iframe
                className="map-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197537084541!2d-46.65432342374965!3d-23.561287078800296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1709901234567!5m2!1spt-BR!2sbr"
                title="Localização FAZCASA"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <span className="brand-mark">FAZCASA</span>
            <p>Materiais de Construção LTDA.</p>
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} FAZCASA · Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  )
}
