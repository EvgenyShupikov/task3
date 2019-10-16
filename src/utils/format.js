/**
 * Добавляет символы в начало строки до необходимой длины
 * @param {string|numner} value исходная строка
 * @param {string} pad добавляемый символ
 * @param {number} maxLength необходимая длина
 * @returns {string} дополненная строка
 */
export function padLeft(value, pad, maxLength) {
    if (!pad || !value || value.length >= maxLength || maxLength <= 0 || pad.length <= 0) {
        return value;
    }

    value = value.toString();

    while (value.length < maxLength) {
        value = pad + value;
    }

    return value;
}