import Link from 'next/link'
import React from 'react'
import { Image } from 'react-bootstrap'

const ProductDetail = () => {
  return (
    <>
      <section class="productdetail">
        <div class="productdetail__container">
          <div class="productdetail__card">
            <div class="productcard__text-inner">
              <div className="productcard__text-body">
                <h4 className="productcard__title fw-bold pb-3">Rhenacret Nivelador</h4>
                <h5>MORTERO AUTONIVELANTE</h5>
                <ul>
                  <li>
                    Autonivelante
                  </li>
                  <li>
                    Fácil preparación y colocación
                  </li>
                  <li>
                    Alta estabilidad dimensional y durabilidad
                  </li>
                  <li>
                    Acabado liso y fino acompañado de alta resistencia final
                  </li>
                  <li>
                    Alta trabajabilidad y rendimiento
                  </li>
                  <li>
                    No sufre retracciones hasta el espesor máximo indicado
                  </li>
                  <li>
                    Uso exclusivo para superficies interiores
                  </li>
                </ul>
                <div className="productcard__price fw-bold">$ 16.500</div>
                <div class="buttons__card d-flex flex-column gap-4 mb-4">
                  <Link href="#" className="btn btn-primary">Agregar al carro
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-bag-heart" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                    </svg></Link>
                </div>
              </div>
            </div>
            <div class="productcard__image">
              <Image src="/assets/images/shop/producto-rhenatec.png" alt="" />
            </div>
          </div>
        </div>



      </section>

    </>
  )
}

export default ProductDetail
