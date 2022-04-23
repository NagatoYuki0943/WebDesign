# $

```
$C_n^2$ or $$C_n^2$$
```

$C_n^2$

$$C_n^2$$



# 两个反斜线可以换行

```
F =1 \\
3x3Conv(3) = (1 - 1) * 1 + 3 = 3 \\
3x3Conv(2) = (3 - 1) * 1 + 3 = 5 \\
3x3Conv(1) = (3 - 1) * 1 + 3 = 7 \\
```

$$
F =1 \\
3x3Conv(3) = (1 - 1) * 1 + 3 = 3 \\
3x3Conv(2) = (3 - 1) * 1 + 3 = 5 \\
3x3Conv(1) = (3 - 1) * 1 + 3 = 7 \\
$$

# 1 呈位置

- 正文(inline)中的LaTeX公式用`$...$`定义

- 语句为`\sum_{i=0}^N\int_{a}^{b}g(t,i)\text{d}t`

    - 显示在当前行内 $\sum_{i=0}^N\int_{a}^{b}g(t,i)\text{d}t$

- 单独显示(display)的LaTeX公式用`$$...$$`定义，此时公式居中并放大显示

- 语句为`\sum_{i=0}^{\infty}N\int_{a}^{b}g(t,i)dt`

    - 显示为

    $$
    \sum_{i=0}^{\infty}N\int_{a}^{b}g(t,i)dt
    $$

    

- 示例:  `$u_j=w_0 * w_m^{s_j}$`
    - $u_j=w_0 * w_m^{s_j}$
    
- 下列描述语句中若非特别指出均省略`$...$`

----

# 2 希腊字母

| 命令      | 显示    | 原生字母 | 命令 | 显示     | 原生字母 |
| :--------: | ---------- | :--: | :--------: | ---------- | -------- |
|  `\Alpha`  | $\Alpha$  | Α |  `\alpha`  | $\alpha$   | α        |
|  `\Beta`   | $\Beta$    | Β |  `\beta`   | $\beta$    | β        |
|  `\Gamma`  | $\Gamma$   | Γ |  `\gamma`  | $\gamma$   | γ        |
|  `\Delta`  | $\Delta$   | Δ |  `\delta`  | $\delta$   | δ        |
| `\Epsilon` | $\Epsilon$ | Ε | `\epsilon` | $\epsilon$ | ε        |
|  `\Zeta`   | $\Zeta$    | Ζ |  `\zeta`   | $\zeta$    | ζ        |
|   `\Eta`   | $\Eta$     | Η |   `\eta`   | $\eta$     | η        |
|  `\Theta`  | $\Theta$   | Θ |  `\theta`  | $\theta$   | θ        |
|  `\Iota`   | $\Iota$    | Ι |  `\iota`   | $\iota$    | ι        |
|  `\Kappa`  | $\Kappa$   | Κ |  `\kappa`  | $\kappa$   | κ        |
| `\Lambda`  | $\Lambda$  | Λ | `\lambda`  | $\lambda$  | λ        |
|   `\Mu`    | $\Mu$      | Μ |   `\mu`    | $\mu$      | μ        |
|   `\Nu`    | $\Nu$      | Ν |   `\nu`    | $\nu$      | ν        |
|   `\Xi`    | $\Xi$      | Ξ |   `\xi`    | $\xi$      | ξ        |
| `\Omicron` | $\Omicron$ | Ο | `\omicron` | $\omicron$ | ο       |
|   `\Pi`    | $\Pi$      | Π |   `\pi`    | $\pi$      | π        |
|   `\Rho`   | $\Rho$     | Ρ |   `\rho`   | $\rho$     | ρ        |
|  `\Sigma`  | $\Sigma$   | Σ |  `\sigma`  | $\sigma$   | σ        |
|   `\Tau`   | $\Tau$     | Τ |   `\tau`   | $\tau$     | τ        |
| `\Upsilon` | $\Upsilon$ | Υ | `\upsilon` | $\upsilon$ | υ        |
|   `\Phi`   | $\Phi$    | Φ |   `\phi`   | $\phi$     | φ        |
|   `\Chi`   | $\Chi$     | Χ |   `\chi`   | $\chi$     | χ        |
|   `\Psi`   | $\Psi$     | Ψ |   `\psi`   | $\psi$     | ψ        |
|  `\Omega`  | $\Omega$   | Ω |  `\omega`  | $\omega$   | ω        |

- 若需要大写希腊字母，将命令首字母大写即可。
    \Gamma =>  $\Gamma$

- 若需要斜体希腊字母，将命令前加上var前缀即可。

    \varGamma => $\varGamma$
----

# 3 字母修饰

## 3.1 上下标

- 上标：`^`
- 下标：`_`
    - ``C_n^2`=> $C_n^2$


----

## 3.2 字体

- Typewriter : `\mathtt{A}`=> $\mathtt{A}$
    - $\mathtt{ABCDEFGHIJKLMNOPQRESUVWXYZ}$
- Blackboard Bold: `\mathbb{A}`呈现为 $\mathbb{A}$
    - $\mathbb{ABCDEFGHIJKLMNOPQRESUVWXYZ}$
- Sans Serif: `\mathsf{A}`=> $\mathsf{A}$
    - $\mathsf{ABCDEFGHIJKLMNOPQRESUVWXYZ}$

----

## 3.3 分组 {}

- 使用`{}`将相同等级的内容扩如其中,成组处理
    - `10^{10}_{5}` => $10^{10}_{5}$
    - `10_{5}^{10}` 也显示为 $10^{10}_{5}$

----

## 3.4 括号

- 小括号: `()` => $()$
- 中括号: `[]` => $[]$
- 尖括号: `\langle  \rangle` => $\langle \rangle$
    - 此处为与分组符号 `{}` 相区别,使用转义字符 `\`
- 使用`\left( \right)`使符号大小与邻近的公式相适应;该语句适用于所有括号类型
    - 普通括号: `(\frac{x} {y})` => $(\frac {x} {y})$
    - 这个括号: `\left(\frac{x} {y} \right)` => $\left(\frac{x} {y} \right)$

----

# 4 符号

## 4.1 分式与根式 `\frac \dfrac \over \sqrt`

- 分式(fraction): `\frac {公式1} {公式2}` => $\frac {公式1} {公式2}$
    - `\frac 1 a` => $\frac 1 a$
- `\dfrac{}{}`
    - `\dfrac 1 a` => $\dfrac 1 a$
- `{公式1} \over {公式2}`
    - `{1 \over {x}}` => ${1 \over {x}}$
- 根式: `\sqrt [x] {y}` => $\sqrt [x] {y}$

## 4.2 开方

- 开方  `\sqrt[2]{8}`  $\sqrt[2]{8}$

## 4.3 乘除

- 乘法  `\times`  $\times$

- 点乘  `\cdot`  $\cdot$

- 除法  `\div`  $\div$

## 4.x 其他

|     中文     |                       代码                       |                       效果                       |
| :----------: | :----------------------------------------------: | :----------------------------------------------: |
|     积分     |                `\int_0^1 x^2 dx`                 |                $\int_0^1 x^2 dx$                 |
|     极限     | `\lim\limits_{x \rightarrow \infty} \frac{1}{x}` | $\lim\limits_{x \rightarrow \infty} \frac{1}{x}$ |
|     累加     |             `\sum_1^n \frac{1}{x^2}`             |             $\sum_1^n \frac{1}{x^2}$             |
|     累乘     |         `\prod_{i=0}^n {1 \over {x^2}}`          |          $\prod_{i=0}^n{1 \over {x^2}}$          |
|     对数     |               `\log`或`\ln`或`\lg`               |                 $\log或\ln或\lg$                 |
|   三角函数   |  `\sin`或`\sin`或`\tan`或`\cot`或`\sec`或`\csc`  |       $\sin或\sin或\tan或\cot或\sec或\csc$       |
|     加减     |                      `\pm`                       |                      $\pm$                       |
|     减加     |                      `\mp`                       |                      $\mp$                       |
|    省略号    |                `\cdots`或`\ldots`                |                 $\cdots或\ldots$                 |
|     无穷     |                     `\infty`                     |                     $\infty$                     |
|     空集     |            `\emptyset`或`\varnothing`            |             $\emptyset或\varnothing$             |
|     属于     |                      `\in`                       |                      $\in$                       |
|    不属于    |                     `\notin`                     |                     $\notin$                     |
|    不等于    |                 `\neq`或`\not=`                  |                  $\neq或\not=$                   |
|   大于等于   |               `\geq`或`\geqslant`                |                $\geq或\geqslant$                 |
|   小于等于   |               `\leq`或`\leqslant`                |                $\leq或\leqslant$                 |
|    包含于    |                   `\subseteq`                    |                   $\subseteq$                    |
|   真包含于   |                  `\subsetneqq`                   |                  $\subsetneqq$                   |
|     包含     |                   `\supseteq`                    |                   $\supseteq$                    |
|    真包含    |                  `\supsetneqq`                   |                  $\supsetneqq$                   |
|     交集     |                      `\cap`                      |                      $\cap$                      |
|     并集     |                      `\cup`                      |                      $\cup$                      |
|      非      |                      `\neg`                      |                      $\neg$                      |
|      或      |                      `\lor`                      |                      $\lor$                      |
|      与      |                     `\land`                      |                     $\land$                      |
| 至少存在一个 |                    `\exists`                     |                    $\exists$                     |
|  只存在一个  |                    `\exists!`                    |                    $\exists!$                    |
|    对全部    |                    `\forall`                     |                    $\forall$                     |
|    右箭头    |         `\Rightarrow`或`\Longrightarrow`         |          $\Rightarrow或\Longrightarrow$          |
|    左箭头    |          `\Leftarrow`或`\Longleftarrow`          |           $\Leftarrow或\Longleftarrow$           |
|    等价于    |            `\Leftrightarrow`或`\iff`             |             $\Leftrightarrow或\iff$              |
|     向量     |          `\vec a `或`\overrightarrow a`          |           $\vec a 或\overrightarrow a$           |
|     垂直     |                     `\perp`                      |                     $\perp$                      |
|    不垂直    |                   `\not\pert`                    |                   $\not\pert$                    |
|     平行     |                   `\parallel`                    |                   $\parallel$                    |
|    不平行    |                   `\nparallel`                   |                   $\nparallel$                   |
|     相似     |                      `\sim`                      |                      $\sim$                      |
|     全等     |                     `\cong`                      |                     $\cong$                      |
|    三角形    |                   `\triangle`                    |                   $\triangle$                    |
|     角度     |                     `\angle`                     |                     $\angle$                     |
|     因为     |                    `\because`                    |                    $\because$                    |
|     所以     |                   `\therefore`                   |                   $\therefore$                   |
|    上划线    |               `\overline{a+b+c+d}`               |               $\overline{a+b+c+d}$               |
|    下划线    |                `\underline{a+b}`                 |                $\underline{a+b}$                 |
|    上括号    |             `\overbrace{a+b}^{3个}`              |             $\overbrace{a+b}^{3个}$              |
|    下括号    |             `\underbrace{a+b}_{3个}`             |             $\underbrace{a+b}_{3个}$             |
|     连线     |       `\hat{y}`或`\check{y}`或`\breve{y}`        |    $\hat{y} \quad \check{y} \quad \breve{y}$     |
|   转义符号   |              `\# \$ \% \& \_ \{ \}`              |              $\# \$ \% \& \_ \{ \}$              |
|    相当于    |                     `\equiv`                     |                     $\equiv$                     |
|     内积     |              `\langle x, b \rangle`              |              $\langle x, b \rangle$              |
|     外积     |                   `x\otimes b`                   |                   $x\otimes b$                   |
|              |                                                  |                                                  |
|              |                                                  |                                                  |

----

# 5 空格

| 名称         | 代码         | 示例         | 指示           |
| ------------ | ------------ | ------------ | -------------- |
| 紧贴         | `a\!b`       | $a\!b$       | 缩进 1/6m 宽度 |
| 没有空格     | `ab`         | $ab$         | 标准           |
| 小空格       | `a\,b`       | $a\,b$       | 1/6m 宽度      |
| 中等空格     | `a\;b`       | $a\;b$       | 2/7m 宽度      |
| 大空格       | `a\ b`       | $a\ b$       | 1/3m 宽度      |
| quad空格     | `a \quad b`  | $a \quad b$  | 一个m宽度      |
| 两个quad空格 | `a \qquad b` | $a \qquad b$ | 两个m宽度      |
|              |              |              |                |
|              |              |              |                |

----

# 6 矩阵

## 6.1 基本语法

起始标记`\begin{matrix}`，结束标记`\end{matrix}`
每一行末尾标记`\\\`，行间元素之间以`&`分隔
举例:



```ruby
$$
\begin{matrix}
1&0&0\\
0&1&0\\
0&0&1\\
\end{matrix}
$$
```

呈现为：

$$
\begin{matrix}
1&0&0\\
0&1&0\\
0&0&1\\
\end{matrix}
$$


----

## 6.2 矩阵边框

- 在起始、结束标记处用下列词替换 `matrix`
- `pmatrix` ：小括号边框
- `bmatrix` ：中括号边框
- `Bmatrix` ：大括号边框
- `vmatrix` ：单竖线边框
- `Vmatrix` ：双竖线边框

----

## 6.3 省略元素

- 横省略号：`\cdots`
- 竖省略号：`\vdots`
- 斜省略号：`\ddots`

> 举例

```ruby
$$
\begin{bmatrix}
{a_{11}}&{a_{12}}&{\cdots}&{a_{1n}}\\
{a_{21}}&{a_{22}}&{\cdots}&{a_{2n}}\\
{\vdots}&{\vdots}&{\ddots}&{\vdots}\\
{a_{m1}}&{a_{m2}}&{\cdots}&{a_{mn}}\\
\end{bmatrix}
$$
```

呈现为：
$$
\begin{bmatrix}
{a_{11}}&{a_{12}}&{\cdots}&{a_{1n}}\\
{a_{21}}&{a_{22}}&{\cdots}&{a_{2n}}\\
{\vdots}&{\vdots}&{\ddots}&{\vdots}\\
{a_{m1}}&{a_{m2}}&{\cdots}&{a_{mn}}\\
\end{bmatrix}
$$

----

## 6.4 阵列

- 需要array环境: 开始结束以`{array}`声明
- 对齐方式: 在 `{array}`之后以`{}`逐行统一声明
    - 左对齐: `l`; 居中: `c`; 右对齐: `r`
    - 竖直线: 在声明对齐方式时, 插入 `|` 建立竖直线
- 插入水平线: `\hline`

> 举例

```swift
$$
\begin{array}
{c|lll}
{↓}&{a}&{b}&{c}\\
\hline
{R_1}&{1}&{2}&{3}\\
{R_2}&{4}&{5}&{6}\\
{R_3}&{7}&{8}&{9}\\
\end{array}
$$
```

呈现为
$$
\begin{array}
{c|lll}
{↓}&{a}&{b}&{c}\\
\hline
{R_1}&{1}&{2}&{3}\\
{R_2}&{4}&{5}&{6}\\
{R_3}&{7}&{8}&{9}\\
\end{array}
$$


----

## 6.5 方程组

- 需要cases环境：起始、结束处以{cases}声明

> 举例

```cpp
$$
\begin{cases}
a_1x+b_1y+c_1z=d_1\\
a_2x+b_2y+c_2z=d_2\\
a_3x+b_3y+c_3z=d_3\\
\end{cases}
$$
```

呈现为
$$
\begin{cases}
a_1x+b_1y+c_1z=d_1\\
a_2x+b_2y+c_2z=d_2\\
a_3x+b_3y+c_3z=d_3\\
\end{cases}
$$

----



