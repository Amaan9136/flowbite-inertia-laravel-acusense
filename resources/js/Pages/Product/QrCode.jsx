// resources/js/Pages/Product/QrCode.js

const QrCodePage = ({ qrCodeUrl }) => {
    return (
        <div>
            <h2>Scan this QR Code</h2>
            <img src={`data:image/png;base64,${qrCodeUrl}`} alt="QR Code" />
        </div>
    );
};

export default QrCodePage;
