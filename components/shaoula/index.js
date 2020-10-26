function Shaoula({ size, ...props }) {
  const width = 120 * (size ?? 1)
  const height = 42 * (size ?? 1)
  return (
    <svg
      width={width.toString()}
      height={height.toString()}
      viewBox="0 0 120 42"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M17.6484 30.4453C16.6328 30.4453 15.6836 30.3203 14.8008 30.0703C13.9258 29.8203 13.1836 29.5234 12.5742 29.1797L11.7656 30H10.7695L10.6172 23.9883H11.625C11.8516 24.5586 12.1406 25.1602 12.4922 25.793C12.8438 26.4258 13.25 26.9922 13.7109 27.4922C14.1875 28.0156 14.7188 28.4414 15.3047 28.7695C15.8984 29.0977 16.5898 29.2617 17.3789 29.2617C18.4414 29.2617 19.2539 29.0039 19.8164 28.4883C20.3867 27.9648 20.6719 27.3086 20.6719 26.5195C20.6719 25.8711 20.4297 25.3281 19.9453 24.8906C19.4688 24.4453 18.7266 24.0625 17.7188 23.7422C17.0625 23.5312 16.457 23.3359 15.9023 23.1562C15.3555 22.9766 14.8398 22.793 14.3555 22.6055C13.2383 22.1602 12.4062 21.5234 11.8594 20.6953C11.3203 19.8672 11.0508 18.9414 11.0508 17.918C11.0508 17.2695 11.1914 16.6484 11.4727 16.0547C11.7539 15.4531 12.1641 14.9141 12.7031 14.4375C13.2188 13.9922 13.8789 13.6289 14.6836 13.3477C15.4883 13.0664 16.3633 12.9258 17.3086 12.9258C18.2305 12.9258 19.0938 13.0547 19.8984 13.3125C20.7031 13.5625 21.3359 13.8164 21.7969 14.0742L22.5117 13.3711H23.5312L23.625 19.043H22.6172C22.3828 18.4336 22.1055 17.8125 21.7852 17.1797C21.4727 16.5391 21.1406 16.0078 20.7891 15.5859C20.4062 15.1328 19.9648 14.7734 19.4648 14.5078C18.9648 14.2344 18.3789 14.0977 17.707 14.0977C16.8633 14.0977 16.1719 14.3359 15.6328 14.8125C15.1016 15.2891 14.8359 15.8789 14.8359 16.582C14.8359 17.2461 15.0664 17.7891 15.5273 18.2109C15.9961 18.6328 16.7227 19.0039 17.707 19.3242C18.2852 19.5195 18.875 19.7148 19.4766 19.9102C20.0781 20.1055 20.6133 20.293 21.082 20.4727C22.2148 20.9102 23.0742 21.5156 23.6602 22.2891C24.2539 23.0547 24.5508 24.0078 24.5508 25.1484C24.5508 25.8672 24.3828 26.5625 24.0469 27.2344C23.7109 27.9062 23.2578 28.4648 22.6875 28.9102C22.0625 29.4023 21.3398 29.7812 20.5195 30.0469C19.6992 30.3125 18.7422 30.4453 17.6484 30.4453ZM41.3672 30H34.3125V29.1445C34.4688 29.1289 34.6523 29.1094 34.8633 29.0859C35.0742 29.0625 35.2305 29.0234 35.332 28.9688C35.4961 28.8828 35.6094 28.7578 35.6719 28.5938C35.7422 28.4297 35.7773 28.1875 35.7773 27.8672V22.3828C35.7773 21.5781 35.625 20.9766 35.3203 20.5781C35.0234 20.1797 34.5977 19.9805 34.043 19.9805C33.7305 19.9805 33.4375 20.0273 33.1641 20.1211C32.8984 20.2148 32.6367 20.3516 32.3789 20.5312C32.1523 20.6875 31.9688 20.8477 31.8281 21.0117C31.6953 21.1758 31.582 21.3203 31.4883 21.4453V27.7383C31.4883 28.0273 31.5234 28.2578 31.5938 28.4297C31.6641 28.5938 31.7969 28.7305 31.9922 28.8398C32.1094 28.9102 32.2617 28.9727 32.4492 29.0273C32.6445 29.082 32.832 29.1211 33.0117 29.1445V30H25.8867V29.1445C26.0898 29.1289 26.2852 29.1094 26.4727 29.0859C26.668 29.0625 26.8398 29.0234 26.9883 28.9688C27.2383 28.875 27.4062 28.7422 27.4922 28.5703C27.5859 28.3906 27.6328 28.1562 27.6328 27.8672V14.8008C27.6328 14.5508 27.5742 14.2852 27.457 14.0039C27.3398 13.7227 27.1758 13.5117 26.9648 13.3711C26.8086 13.2695 26.582 13.1914 26.2852 13.1367C25.9883 13.0742 25.7227 13.0352 25.4883 13.0195V12.1641L31.3125 11.8594L31.4883 12.0469V20.1094H31.5352C31.832 19.8438 32.0977 19.6055 32.332 19.3945C32.5742 19.1758 32.8672 18.957 33.2109 18.7383C33.5 18.5508 33.875 18.3906 34.3359 18.2578C34.8047 18.125 35.3086 18.0586 35.8477 18.0586C37.1133 18.0586 38.0625 18.4219 38.6953 19.1484C39.3359 19.875 39.6562 20.832 39.6562 22.0195V27.7617C39.6562 28.0508 39.6992 28.2812 39.7852 28.4531C39.8711 28.625 40.0312 28.7617 40.2656 28.8633C40.4062 28.9258 40.5625 28.9805 40.7344 29.0273C40.9062 29.0742 41.1172 29.1133 41.3672 29.1445V30ZM55.8398 29.7539C55.4961 29.9023 55.0898 30.0391 54.6211 30.1641C54.1523 30.2891 53.6562 30.3516 53.1328 30.3516C52.1719 30.3516 51.4648 30.2109 51.0117 29.9297C50.5586 29.6406 50.25 29.2305 50.0859 28.6992H50.0156C49.75 28.9648 49.4922 29.1914 49.2422 29.3789C49 29.5664 48.7383 29.7266 48.457 29.8594C48.0898 30.0312 47.7344 30.1562 47.3906 30.2344C47.0547 30.3203 46.582 30.3633 45.9727 30.3633C45.0664 30.3633 44.293 30.0977 43.6523 29.5664C43.0117 29.0273 42.6914 28.3164 42.6914 27.4336C42.6914 26.9258 42.7617 26.4961 42.9023 26.1445C43.043 25.7852 43.2422 25.4688 43.5 25.1953C43.7344 24.9453 44.0039 24.7383 44.3086 24.5742C44.6211 24.4102 44.9609 24.2578 45.3281 24.1172C46.0312 23.8594 46.875 23.5938 47.8594 23.3203C48.8438 23.0391 49.5625 22.7891 50.0156 22.5703V21.4453C50.0156 21.25 50 20.9922 49.9688 20.6719C49.9375 20.3516 49.8711 20.082 49.7695 19.8633C49.6602 19.6133 49.4883 19.4023 49.2539 19.2305C49.0195 19.0586 48.7109 18.9727 48.3281 18.9727C47.9844 18.9727 47.6953 19.0234 47.4609 19.125C47.2344 19.2188 47.0508 19.3164 46.9102 19.418C46.9336 19.5742 47 19.8125 47.1094 20.1328C47.2188 20.4531 47.2734 20.7617 47.2734 21.0586C47.2734 21.1914 47.2383 21.3594 47.168 21.5625C47.0977 21.7578 46.9961 21.9141 46.8633 22.0312C46.6836 22.1875 46.4805 22.3086 46.2539 22.3945C46.0352 22.4805 45.6953 22.5234 45.2344 22.5234C44.5781 22.5234 44.082 22.3672 43.7461 22.0547C43.4102 21.7344 43.2422 21.3203 43.2422 20.8125C43.2422 20.375 43.4141 19.9844 43.7578 19.6406C44.1094 19.2891 44.5352 19 45.0352 18.7734C45.5273 18.5391 46.0938 18.3594 46.7344 18.2344C47.375 18.1016 47.9688 18.0352 48.5156 18.0352C49.2734 18.0352 49.9688 18.082 50.6016 18.1758C51.2344 18.2617 51.8047 18.4453 52.3125 18.7266C52.7969 19 53.1797 19.3984 53.4609 19.9219C53.75 20.4375 53.8945 21.1133 53.8945 21.9492C53.8945 22.832 53.875 23.8789 53.8359 25.0898C53.8047 26.3008 53.7891 27.0977 53.7891 27.4805C53.7891 27.832 53.8398 28.1094 53.9414 28.3125C54.0508 28.5156 54.2148 28.668 54.4336 28.7695C54.5664 28.832 54.7734 28.8711 55.0547 28.8867C55.3438 28.8945 55.6055 28.8984 55.8398 28.8984V29.7539ZM50.0156 23.6484C49.5781 23.7969 49.1445 23.9688 48.7148 24.1641C48.2852 24.3516 47.9336 24.5508 47.6602 24.7617C47.3711 24.9805 47.1445 25.2617 46.9805 25.6055C46.8164 25.9414 46.7344 26.3398 46.7344 26.8008C46.7344 27.4102 46.8711 27.8516 47.1445 28.125C47.4258 28.3984 47.7695 28.5352 48.1758 28.5352C48.6055 28.5352 48.957 28.4492 49.2305 28.2773C49.5117 28.0977 49.7578 27.8789 49.9688 27.6211L50.0156 23.6484ZM68.707 19.7578C69.2852 20.2969 69.7266 20.9414 70.0312 21.6914C70.3359 22.4414 70.4883 23.2539 70.4883 24.1289C70.4883 24.9961 70.3359 25.8164 70.0312 26.5898C69.7344 27.3555 69.2969 28.0117 68.7188 28.5586C68.1016 29.1445 67.3633 29.5938 66.5039 29.9062C65.6523 30.2188 64.6758 30.375 63.5742 30.375C62.6211 30.375 61.7422 30.2383 60.9375 29.9648C60.1406 29.6914 59.4336 29.2812 58.8164 28.7344C58.2227 28.2109 57.7539 27.5664 57.4102 26.8008C57.0664 26.0273 56.8945 25.1641 56.8945 24.2109C56.8945 23.2734 57.043 22.4414 57.3398 21.7148C57.6445 20.9805 58.0977 20.3281 58.6992 19.7578C59.2773 19.2109 59.9883 18.7891 60.832 18.4922C61.6836 18.1875 62.6328 18.0352 63.6797 18.0352C64.7734 18.0352 65.7344 18.1875 66.5625 18.4922C67.3984 18.7891 68.1133 19.2109 68.707 19.7578ZM65.707 27.8789C65.8789 27.4414 66.0039 26.9102 66.082 26.2852C66.168 25.6602 66.2109 24.9336 66.2109 24.1055C66.2109 23.5586 66.1719 22.9336 66.0938 22.2305C66.0156 21.5273 65.8984 20.9727 65.7422 20.5664C65.5547 20.0742 65.293 19.6875 64.957 19.4062C64.6289 19.125 64.2109 18.9844 63.7031 18.9844C63.1484 18.9844 62.7031 19.1367 62.3672 19.4414C62.0391 19.7461 61.7852 20.1406 61.6055 20.625C61.4414 21.0703 61.3281 21.5938 61.2656 22.1953C61.2031 22.7891 61.1719 23.4102 61.1719 24.0586C61.1719 24.9102 61.1992 25.6172 61.2539 26.1797C61.3086 26.7344 61.4414 27.293 61.6523 27.8555C61.832 28.3398 62.0898 28.7227 62.4258 29.0039C62.7617 29.2852 63.1875 29.4258 63.7031 29.4258C64.1719 29.4258 64.5742 29.2969 64.9102 29.0391C65.2461 28.7734 65.5117 28.3867 65.707 27.8789ZM87.293 29.7539L81.7031 30.0938L81.5273 29.9297V28.3945H81.457C81.1914 28.6367 80.9297 28.875 80.6719 29.1094C80.4219 29.3359 80.1211 29.543 79.7695 29.7305C79.3711 29.9414 78.9922 30.0977 78.6328 30.1992C78.2812 30.3008 77.7656 30.3516 77.0859 30.3516C75.9062 30.3516 75 29.9961 74.3672 29.2852C73.7422 28.5742 73.4297 27.5703 73.4297 26.2734V21C73.4297 20.6953 73.3711 20.4492 73.2539 20.2617C73.1367 20.0664 72.9805 19.8945 72.7852 19.7461C72.6289 19.6289 72.4258 19.5469 72.1758 19.5C71.9258 19.4453 71.6992 19.4102 71.4961 19.3945V18.5391L77.1797 18.2344L77.3086 18.4102V26.2031C77.3086 27.0078 77.4609 27.6016 77.7656 27.9844C78.0781 28.3672 78.5039 28.5586 79.043 28.5586C79.5977 28.5586 80.0938 28.4141 80.5312 28.125C80.9766 27.8359 81.3008 27.5273 81.5039 27.1992V20.8828C81.5039 20.6172 81.4531 20.3789 81.3516 20.168C81.25 19.957 81.1016 19.7852 80.9062 19.6523C80.7656 19.5586 80.5625 19.4961 80.2969 19.4648C80.0391 19.4336 79.7734 19.4102 79.5 19.3945V18.5391L85.1836 18.2344L85.3594 18.4102V27.457C85.3594 27.7305 85.4141 27.9648 85.5234 28.1602C85.6328 28.3477 85.793 28.5078 86.0039 28.6406C86.1523 28.7344 86.3438 28.8008 86.5781 28.8398C86.8203 28.8711 87.0586 28.8906 87.293 28.8984V29.7539ZM95.3789 30H88.0312V29.1445C88.2344 29.1289 88.4297 29.1094 88.6172 29.0859C88.8125 29.0625 88.9844 29.0234 89.1328 28.9688C89.3828 28.875 89.5508 28.7422 89.6367 28.5703C89.7305 28.3906 89.7773 28.1562 89.7773 27.8672V14.8828C89.7773 14.5859 89.7148 14.3125 89.5898 14.0625C89.4727 13.8047 89.3125 13.6094 89.1094 13.4766C88.9531 13.375 88.7148 13.2773 88.3945 13.1836C88.082 13.0898 87.8047 13.0352 87.5625 13.0195V12.1641L93.457 11.8594L93.6328 12.0469V27.7148C93.6328 28.0039 93.6836 28.2383 93.7852 28.418C93.8867 28.5977 94.0508 28.7383 94.2773 28.8398C94.4336 28.9102 94.5977 28.9727 94.7695 29.0273C94.9414 29.082 95.1445 29.1211 95.3789 29.1445V30ZM109.91 29.7539C109.566 29.9023 109.16 30.0391 108.691 30.1641C108.223 30.2891 107.727 30.3516 107.203 30.3516C106.242 30.3516 105.535 30.2109 105.082 29.9297C104.629 29.6406 104.32 29.2305 104.156 28.6992H104.086C103.82 28.9648 103.562 29.1914 103.312 29.3789C103.07 29.5664 102.809 29.7266 102.527 29.8594C102.16 30.0312 101.805 30.1562 101.461 30.2344C101.125 30.3203 100.652 30.3633 100.043 30.3633C99.1367 30.3633 98.3633 30.0977 97.7227 29.5664C97.082 29.0273 96.7617 28.3164 96.7617 27.4336C96.7617 26.9258 96.832 26.4961 96.9727 26.1445C97.1133 25.7852 97.3125 25.4688 97.5703 25.1953C97.8047 24.9453 98.0742 24.7383 98.3789 24.5742C98.6914 24.4102 99.0312 24.2578 99.3984 24.1172C100.102 23.8594 100.945 23.5938 101.93 23.3203C102.914 23.0391 103.633 22.7891 104.086 22.5703V21.4453C104.086 21.25 104.07 20.9922 104.039 20.6719C104.008 20.3516 103.941 20.082 103.84 19.8633C103.73 19.6133 103.559 19.4023 103.324 19.2305C103.09 19.0586 102.781 18.9727 102.398 18.9727C102.055 18.9727 101.766 19.0234 101.531 19.125C101.305 19.2188 101.121 19.3164 100.98 19.418C101.004 19.5742 101.07 19.8125 101.18 20.1328C101.289 20.4531 101.344 20.7617 101.344 21.0586C101.344 21.1914 101.309 21.3594 101.238 21.5625C101.168 21.7578 101.066 21.9141 100.934 22.0312C100.754 22.1875 100.551 22.3086 100.324 22.3945C100.105 22.4805 99.7656 22.5234 99.3047 22.5234C98.6484 22.5234 98.1523 22.3672 97.8164 22.0547C97.4805 21.7344 97.3125 21.3203 97.3125 20.8125C97.3125 20.375 97.4844 19.9844 97.8281 19.6406C98.1797 19.2891 98.6055 19 99.1055 18.7734C99.5977 18.5391 100.164 18.3594 100.805 18.2344C101.445 18.1016 102.039 18.0352 102.586 18.0352C103.344 18.0352 104.039 18.082 104.672 18.1758C105.305 18.2617 105.875 18.4453 106.383 18.7266C106.867 19 107.25 19.3984 107.531 19.9219C107.82 20.4375 107.965 21.1133 107.965 21.9492C107.965 22.832 107.945 23.8789 107.906 25.0898C107.875 26.3008 107.859 27.0977 107.859 27.4805C107.859 27.832 107.91 28.1094 108.012 28.3125C108.121 28.5156 108.285 28.668 108.504 28.7695C108.637 28.832 108.844 28.8711 109.125 28.8867C109.414 28.8945 109.676 28.8984 109.91 28.8984V29.7539ZM104.086 23.6484C103.648 23.7969 103.215 23.9688 102.785 24.1641C102.355 24.3516 102.004 24.5508 101.73 24.7617C101.441 24.9805 101.215 25.2617 101.051 25.6055C100.887 25.9414 100.805 26.3398 100.805 26.8008C100.805 27.4102 100.941 27.8516 101.215 28.125C101.496 28.3984 101.84 28.5352 102.246 28.5352C102.676 28.5352 103.027 28.4492 103.301 28.2773C103.582 28.0977 103.828 27.8789 104.039 27.6211L104.086 23.6484Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="120" height="42" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Shaoula
