export var domain_zone = [
    'ru', 'рф', 'su', 'com', 'net', 'org', 'mil', 'edu', 'arpa', 'gov', 'biz', 'info', 'aero', 'inc', 'name'
]

var _person_title = undefined;
export var person_title = () => {

    if (_person_title !== undefined)
        return Promise.resolve(_person_title);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            _person_title = {
                'mr': 'Mr.',
                'dr': 'Dr.',
                'ms': 'Ms.',
                'mrs': 'Mrs.'
            }
            resolve(_person_title);
        }, 1000)

    })
}

var _country = undefined;
export var country = () => {

    if (_country !== undefined)
        return Promise.resolve(_country);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            _country = {
                'RU': 'Russian Federation',
                'PA': 'Panama',
                'MN': 'Mongolia',
                'AE': 'United Arab Emirates',
                'AL': 'Albania',
                'LA': 'Lao',
                'US': 'United States',
                'UK': 'United Kingdom',
                'CN': 'China',
                'CU': 'Cuba',
                'GI': 'Gibraltar',
                'IQ': 'Iraq',
                'KW': 'Kuwait',
                'KZ': 'Kazakhstan'
            }
            resolve(_country);
        }, 1000)

    })
}