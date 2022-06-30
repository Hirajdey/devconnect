import React from 'react'
import  classnames from 'classnames'

// Styles
import Styles from './ServiceCard.module.scss'

interface ServiceCardProps{
    cardClass?: string;
}

const ServiceCard = ({cardClass}: ServiceCardProps) => {
  return (
    <div className={classnames(Styles.main, cardClass)}>
        
    </div>
  )
}

export default ServiceCard