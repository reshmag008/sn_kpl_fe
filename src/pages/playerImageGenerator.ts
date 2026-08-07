import html2canvas from "html2canvas";

interface GeneratePlayerImageParams {
  player: any;
  playerBg: string;
  soldImg: string;
  contentWidth: number;
  contentHeight: number;
  capitalizeFirst: (value: string) => string;
}

export const downloadPlayerImage = async ({
  player,
  playerBg,
  soldImg,
  contentWidth,
  contentHeight,
  capitalizeFirst,
}: GeneratePlayerImageParams) => {
  try {
    const profileImageUrl = `https://storage.googleapis.com/rajas_pl/${player.profile_image}`;

    const profileImageBase64 = await fetch(profileImageUrl)
      .then((res) => res.blob())
      .then(
        (blob) =>
          new Promise<string>((resolve) => {
            const reader = new FileReader();

            reader.onload = () => {
              resolve(reader.result as string);
            };

            reader.readAsDataURL(blob);
          })
      );

    const tempDiv = document.createElement("div");

    tempDiv.style.width = `${contentWidth * 3}px`;
    tempDiv.style.height = `${contentHeight * 5}px`;
    tempDiv.style.display = "flex";
    tempDiv.style.justifyContent = "center";
    tempDiv.style.alignItems = "center";
    tempDiv.style.backgroundColor = "white";
    tempDiv.style.overflow = "hidden";

    tempDiv.innerHTML = `
      <div style="
        border: 1px solid #ccc;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        width: 100%;
        height: 100%;
        background-image: url(${playerBg});
        background-size: cover;
        background-position: center;
      ">

        <div style="display:flex">
          <img
            src="${profileImageBase64}"
            alt="Player Image"
            style="
              height: 18.1rem;
              width: 12.8rem;
              margin-left: 32px;
              object-fit: cover;
              margin-top: 328px;
              border-radius: 10px;
            "
          />
        </div>

        <div style="text-align:left;">
          <p style="
            margin-top:-600px;
            margin-left:40px;
            font-size:40px;
            color:black;
            font-weight:bold;
          ">
            ${player.id}
          </p>
        </div>

        <div style="text-align:left;">
          <p style="
            margin-top:585px;
            font-size:21px;
            color:black;
            font-weight:bold;
            padding-left:310px;
          ">
            ${player.player_role}
          </p>
        </div>

        <div style="text-align:left;">
          <p style="
            margin-top:1px;
            font-size:21px;
            color:black;
            font-weight:bold;
            padding-left:310px;
          ">
            ${player.batting_style}
          </p>
        </div>

        <div style="text-align:left;">
          <p style="
            margin-top:-10px;
            font-size:21px;
            color:black;
            font-weight:bold;
            padding-left:310px;
          ">
            ${player.bowling_style}
          </p>
        </div>

        <div style="text-align:left;">
          <p style="
            margin-top:-7px;
            font-size:21px;
            color:black;
            font-weight:bold;
            padding-left:310px;
          ">
            ${capitalizeFirst(player.location)}
          </p>
        </div>

        <div style="text-align:left;">
          <p style="
            margin-top:-7px;
            font-size:21px;
            color:black;
            font-weight:bold;
            margin-left:310px;
          ">
            ${player.contact_no}
          </p>
        </div>

        <div style="text-align:left;">
          <p style="
            margin-top:2px;
            margin-left:40px;
            font-size:21px;
            color:white;
            font-weight:bold;
          ">
            ${player.fullname.toUpperCase()}
          </p>
        </div>

        ${
          player.bid_amount
            ? `
              <div style="text-align:left;">
                <img
                  src="${soldImg}"
                  alt="${player.fullname}"
                  style="
                    width:120px;
                    height:120px;
                    object-fit:cover;
                    margin-left:480px;
                    margin-top:-150px;
                  "
                />

                <p style="
                  margin-top:-60px;
                  margin-left:523px;
                  font-size:12px;
                  color:black;
                  font-weight:bold;
                ">
                  ${player.bid_amount}
                </p>
              </div>
            `
            : ""
        }

      </div>
    `;

    document.body.appendChild(tempDiv);

    // Allow browser to render images
    await new Promise((resolve) => setTimeout(resolve, 100));

    const canvas = await html2canvas(tempDiv, {
      scale: 2,
      useCORS: true,
      allowTaint: false,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.9);

    const link = document.createElement("a");

    link.href = imgData;

    link.download = `Player-${player.id}-${player.fullname
      .replace(/[^a-zA-Z0-9]/g, "_")}.jpeg`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    document.body.removeChild(tempDiv);

  } catch (error) {
    console.error("Error generating player JPEG:", error);
  }
};