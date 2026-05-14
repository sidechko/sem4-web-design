function TimestampFormatter(timestamp: number) {
    const date = new Date(timestamp*1000);
    return date.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    });
}

export default TimestampFormatter;