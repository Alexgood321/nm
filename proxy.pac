{\rtf1\ansi\ansicpg1251\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww33400\viewh18200\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function FindProxyForURL(url, host) \{\
    // \uc0\u1057 \u1087 \u1080 \u1089 \u1086 \u1082  \u1087 \u1088 \u1086 \u1082 \u1089 \u1080 \u1088 \u1091 \u1077 \u1084 \u1099 \u1093  \u1076 \u1086 \u1084 \u1077 \u1085 \u1086 \u1074 \
    var proxyDomains = [\
        "discord.com",\
        "trusteeglobal.com",\
        "kubikvkube",\
        "kpapp",\
        "kino.pub",\
        "youtube.com",\
        "youtube",\
        "elevenlabs.zendesk.com",\
        "elevenlabs.io",\
        "anthropic.com",\
        "googleapis.com",\
        "googlevideo.com",\
        "chat.openai.com",\
        "i9.ytimg.com",\
        "play.google.com",\
        "avasam.com",\
        "printify.com",\
        "www.printful.com",\
        "opus.pro",\
        "prompthero.com",\
        "proxy-seller.io",\
        "tiktok.com",\
        "hdrezka.ac",\
        "https://kino.pub",\
        "auth0.openai.com",\
        "skladchik.com",\
        "chatgpt.com",\
        "rutracker.net",\
        "maintracker.org",\
        "z.kubikvkube.online",\
        "dribbble.com",\
        "proxy6.net",\
        "gemini.google.com",\
        "ytimg.com",\
        "yt3.ggpht.com",\
        "meduza.io",\
        "canva.com",\
        "openai.com",\
        "hdrezka.ag"\
    ];\
\
    // \uc0\u1055 \u1088 \u1086 \u1082 \u1089 \u1080 -\u1089 \u1077 \u1088 \u1074 \u1077 \u1088  (\u1079 \u1072 \u1084 \u1077 \u1085 \u1080 \u1090 \u1077  \u1085 \u1072  \u1074 \u1072 \u1096  \u1087 \u1088 \u1086 \u1082 \u1089 \u1080 -\u1089 \u1077 \u1088 \u1074 \u1077 \u1088  Shadowsocks)\
    var proxy = "SOCKS5 127.0.0.1:1080";\
\
    // \uc0\u1045 \u1089 \u1083 \u1080  \u1076 \u1086 \u1084 \u1077 \u1085  \u1089 \u1086 \u1074 \u1087 \u1072 \u1076 \u1072 \u1077 \u1090  \u1089  \u1086 \u1076 \u1085 \u1080 \u1084  \u1080 \u1079  \u1089 \u1087 \u1080 \u1089 \u1082 \u1072 , \u1080 \u1089 \u1087 \u1086 \u1083 \u1100 \u1079 \u1091 \u1077 \u1084  \u1087 \u1088 \u1086 \u1082 \u1089 \u1080 \
    for (var i = 0; i < proxyDomains.length; i++) \{\
        if (dnsDomainIs(host, proxyDomains[i])) \{\
            return proxy;\
        \}\
    \}\
\
    // \uc0\u1042 \u1089 \u1077  \u1086 \u1089 \u1090 \u1072 \u1083 \u1100 \u1085 \u1099 \u1077  \u1079 \u1072 \u1087 \u1088 \u1086 \u1089 \u1099  \u1080 \u1076 \u1091 \u1090  \u1085 \u1072 \u1087 \u1088 \u1103 \u1084 \u1091 \u1102 \
    return "DIRECT";\
\}}