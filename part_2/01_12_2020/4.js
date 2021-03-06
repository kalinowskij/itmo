// Выбрать 10 незнакомых (которые не разбирались на занятиях)
// шаблонов объектов (классов) доступных в глобальной области и привести информацию в виде комментариев
// в коде для чего они используются.
// Информацию можно найти в документации (справочные системы по js, статьи по программированию и т.п.).

// 1 ArrayBuffer
/*
Базовый объект для работы с бинарными данными имеет тип ArrayBuffer
 и представляет собой ссылку на непрерывную область памяти фиксированной длины.
 */


// 2 DelayNode
/*
Вызывает задержку между приходом входных данных и его распространением к выходу.
 DelayNode всегда имеет ровно один вход и один выход, оба с одинаковым количеством каналов.
 */


// 3 DataView
/*
Вид DataView предоставляет низко-уровневый интерфейс для чтения и записи многочисленных числовых типов
 в бинарном ArrayBuffer, независимо от порядка байтов платформы.

 */


// 4 DocumentFragment
/*
DocumentFragment Интерфейс представляет собой минимальный объект документа,
 который не имеет родителя. Он используется как облегченная версия,
  в Documentкоторой хранится сегмент структуры документа, состоящий из узлов, как в стандартном документе.
 */


// 5 HashChangeEvent
/*
События, которые происходят при изменении привязанной части URL-адреса, принадлежат объекту HashChangeEvent.

 */


// 6 ProgressEvent
/*
ProgressEvent Интерфейс представляет событие измерения хода лежащего в основе процесса,
как запрос HTTP (для XMLHttpRequestили загрузки основного ресурса <img>, <audio>, <video>, <style>или <link>)

 */


// 7 globalThis
/*
Глобальное свойство globalThis содержит значение глобального this, который является глобальным объектом.
 */


// 8 periodicSync
/*
periodicSync Свойство только для чтения из ServiceWorkerRegistration интерфейса возвращает ссылку на PeriodicSyncManager интерфейс,
 который позволяет регистрировать задач для запуска через определенные промежутки времени.
 */


// 9 MediaDeviceInfo
/*
MediaDeviceInfo Интерфейс содержит информацию , которая описывает одну носитель входного или выходного устройства.
 Список устройств, полученных при вызове, navigator.mediaDevices.enumerateDevices()
представляет собой массив MediaDeviceInfo объектов, по одному на каждое мультимедийное устройство.
 */


// 10 AbortSignal
/*
AbortSignal интерфейс представляет собой объект сигнала, который позволяет вам общаться с DOM запросом (например, Fetch)
и прервать его при необходимости с помощью объекта AbortController.
 */
