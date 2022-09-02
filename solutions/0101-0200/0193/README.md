**(№ 193) Valid Phone Numbers [easy]**

Дан файл file.txt в котором список из телефонных номеров. Нужно написать bash скрипт, который выведет только телефонные номера подходящие по шаблонам: (xxx) xxx-xxxx или xxx-xxx-xxxx.

**Решение на JavaScript**

```bash
grep -P '^([0-9]{3}-|\([0-9]{3}\) )[0-9]{3}-[0-9]{4}$' file.txt
```

**Объяснение решения**

Coming soon

**Ссылка на задачу:** https://leetcode.com/problems/valid-phone-numbers/