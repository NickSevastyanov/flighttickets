import styles from './FlightBlock.module.css';

const FlightBlock = ({ flight }) => {
  const outboundLeg = flight.legs[0];
  const returnLeg = flight.legs[1];

  const outboundTicket = {
    departureCity: outboundLeg.segments[0].departureCity.caption,
    departureAirport: outboundLeg.segments[0].departureAirport.caption,
    departureAirportCode: outboundLeg.segments[0].departureAirport.uid,
    arrivalCity: outboundLeg.segments[1].arrivalCity.caption,
    arrivalTransferCity: outboundLeg.segments[0].arrivalCity.caption,
    arrivalAirport: outboundLeg.segments[1].arrivalAirport.caption,
    arrivalAirportCode: outboundLeg.segments[1].arrivalAirport.uid,
    departureTime: outboundLeg.segments[0].departureDate,
    arrivalTime: outboundLeg.segments[1].arrivalDate,
    duration: outboundLeg.duration,
    carrier: flight.carrier.caption,
    price: flight.price.total.amount,
  };
  const returnTicket = {
    departureCity: returnLeg.segments[0].departureCity.caption,
    departureAirport: returnLeg.segments[0].departureAirport.caption,
    departureAirportCode: returnLeg.segments[0].departureAirport.uid,
    arrivalCity: returnLeg.segments[1].arrivalCity.caption,
    arrivalAirport: returnLeg.segments[1].arrivalAirport.caption,
    arrivalAirportCode: returnLeg.segments[1].arrivalAirport.uid,
    departureTime: returnLeg.segments[0].departureDate,
    arrivalTime: returnLeg.segments[1].arrivalDate,
    duration: returnLeg.duration,
    carrier: flight.carrier.caption,
  };

  const dateFormatter = (ticketDate) => {
    const date = new Date(ticketDate);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const day = date.getDate();
    const month = date.toLocaleString('ru', { month: 'short' });
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes} (${day} ${month})`;
  };

  return (
    <div className={styles.ticketContainer}>
      <div className={styles.header}>
        <h1>Logo</h1>
        <div className={styles.priceContainer}>
          <span>{outboundTicket.price} Rub</span>
          <span>Стоимость для одного взрослого пассажира</span>
        </div>
      </div>
      <div>
        <div className={styles.infoContainer}>
          {outboundTicket.departureCity}, {outboundTicket.departureAirport}{' '}
          <span className={styles.codeColor}>({outboundTicket.departureAirportCode})</span> →{' '}
          {outboundTicket.arrivalCity}, {outboundTicket.arrivalAirport}{' '}
          <span className={styles.codeColor}>({outboundTicket.arrivalAirportCode})</span>
        </div>
        <div className={styles.timeContainer}>
          <span>{dateFormatter(outboundTicket.departureTime)}</span>
          <span>
            {' '}
            {Math.floor(outboundTicket.duration / 60)} ч {outboundTicket.duration % 60} мин
          </span>
          <span> {dateFormatter(outboundTicket.arrivalTime)}</span>
        </div>
        <div className={styles.transferContainer}>
          {outboundTicket.arrivalTransferCity === returnTicket.departureCity
            ? 'без пересадок'
            : 'пересадка'}
        </div>
        <div className={styles.carrierContainer}>Рейс выполняет: {outboundTicket.carrier}</div>
      </div>
      <div>
        <div className={styles.infoContainer}>
          {returnTicket.departureCity}, {returnTicket.departureAirport}{' '}
          <span className={styles.codeColor}>({returnTicket.departureAirportCode})</span> →{' '}
          {returnTicket.arrivalCity}, {returnTicket.arrivalAirport}{' '}
          <span className={styles.codeColor}>({outboundTicket.arrivalAirportCode})</span>
        </div>
        <div className={styles.timeContainer}>
          <span>{dateFormatter(returnTicket.departureTime)}</span>
          <span>
            {' '}
            {Math.floor(returnTicket.duration / 60)} ч {returnTicket.duration % 60} мин
          </span>
          <span> {dateFormatter(returnTicket.arrivalTime)}</span>
        </div>
        <div className={styles.transferContainer}>
          <span>
            {outboundTicket.arrivalTransferCity === returnTicket.departureCity
              ? 'без пересадок'
              : 'пересадка'}
          </span>
        </div>
        <div className={styles.carrierContainer}>Рейс выполняет: {returnTicket.carrier}</div>
      </div>
    </div>
  );
};

export default FlightBlock;
