/*
{
    "number": 82,
    "processId": 1,
    "process": "Bandejas de Operación",
    "configurationId": 64,
    "configuration": "CL Préstamos Personales",
    "agencyId": 48,
    "agency": "Interlomas",
    "agendaDate": "2024-10-12T08:30:00.000Z",
    "agendaUserId": 12,
    "agendaUser": "arodriguez3",
    "reasonId": 1,
    "reason": "Llamar después",
    "comments": "",
    "agendaType": "Usuario",
    "attendedAgenda": "No",
    "campaignId": 59
}

  const handleChangeDate = (date) => {
    const myDate = formatUTC(date);

    console.log("date normal", date);
    console.log("date UTC", formatUTC(date));
    
    console.log("date toISO", myDate.toISOString());
    console.log("date toLocale", myDate.toLocaleString());

    setStartDate(date);
    setValue("agendaDate", formatUTC(date));
    // Calculate intervals of time from specific day
    const day = getDay(date);
    getTimeByDay(date, day);
  };

date normal Sat Oct 12 2024 08:30:00 GMT-0600 (hora estándar central)
date UTC Sat Oct 12 2024 02:30:00 GMT-0600 (hora estándar central)

date toISO 2024-10-12T08:30:00.000Z
date toLocale 12/10/2024, 2:30:00 a.m.

*/