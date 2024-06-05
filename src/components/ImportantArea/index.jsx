const ImportantArea = () => {
  return (
    <section>
      <div
        style={{
          background: "url(https://picsum.photos/1920/1080)",
          backgroundPosition: "center",
          height: "100%",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundImage:
              "url(https://fastly.picsum.photos/id/403/3997/2665.jpg?hmac=l04T0quGocuZKSo0CxAJ7aC8CivbrCWV0X0dCzqvb0Y)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "auto 80%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              height: "100%",
              padding: "288px 16px",
            }}
          >
            <h2
              style={{
                fontSize: "34px",
                color: "#FFFFFF",
                fontWeight: "bold",
                marginBottom: "48px",
                textAlign: "center",
              }}
            >
              Uma área importante do site
            </h2>
            <button
              style={{
                border: "2px solid #FF9966",
                padding: "14px 40px",
                borderRadius: "4px",
                fontSize: "20px",
                color: "#FFFFFF",
                textTransform: "uppercase",
                fontWeight: "bold",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
              }}
            >
              Acessar agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantArea;
