// 页面切换功能
function switchScreen(screenId) {
    // 隐藏所有屏幕
    document.getElementById('title-screen').style.display = 'none';
    document.getElementById('opening-story1').style.display = 'none';
    document.getElementById('opening-story2').style.display = 'none';
    document.getElementById('opening-story3').style.display = 'none';
    document.getElementById('opening-story4').style.display = 'none';
    document.getElementById('opening-story5').style.display = 'none';
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('editor-screen').style.display = 'none';
    document.querySelector('.preview-area').style.display = 'none';
    
    // 清除所有弹幕容器
    const danmakuContainers = document.querySelectorAll('.danmaku-container');
    danmakuContainers.forEach(container => container.remove());
    
    // 音乐控制
    const openingMusic = document.getElementById('opening-music');
    const gameBgm = document.getElementById('game-bgm');
    
    // 根据屏幕切换控制音乐
    if (screenId === 'opening-story1') {
        // 开始播放开场音乐
        gameBgm.pause();
        openingMusic.currentTime = 0;
        openingMusic.play().catch(e => console.log('Music playback failed:', e));
    } else if (screenId === 'game-screen') {
        // 切换到游戏背景音乐
        openingMusic.pause();
        gameBgm.currentTime = 0;
        gameBgm.play().catch(e => console.log('Music playback failed:', e));
    } else if (screenId === 'editor-screen') {
        // 切换到编辑器界面时暂停所有音乐
        openingMusic.pause();
        gameBgm.pause();
    } else if (screenId === 'preview-area') {
        // 切换到预览界面时继续播放游戏背景音乐
        openingMusic.pause();
        if (gameBgm.paused) {
            gameBgm.play().catch(e => console.log('Music playback failed:', e));
        }
    }
    
    // 显示目标屏幕
    if (screenId === 'preview-area') {
        document.querySelector('.preview-area').style.display = 'block';
        startPreviewTutorial();
    } else {
        document.getElementById(screenId).style.display = 'block';
    }

    // 如果切换到游戏屏幕，根据情况显示不同的教程
    if (screenId === 'game-screen') {
        // 如果是第一次进入游戏页面，显示初始教程
        if (!hasShownTutorial) {
            startTutorial();
        }
        // 如果已经完成了第一个视频的上传，显示回合结束后的教程
        else if (hasShownPreviewTutorial && !hasShownPostRoundTutorial) {
            setTimeout(() => {
                startPostRoundTutorial();
            }, 100);
        }
    }
    // 如果切换到编辑器屏幕，开始编辑器教程
    else if (screenId === 'editor-screen') {
        startEditorTutorial();
    }
}

// 教程控制
let currentTutorial = 0;
let hasShownTutorial = false;  // 添加标记来追踪初始教程是否已显示
let hasShownEditorTutorial = false;  // 添加标记来追踪编辑器教程是否已显示
let hasShownPreviewTutorial = false;  // 添加标记来追踪预览教程是否已显示
let hasShownPostRoundTutorial = false;  // 添加标记来追踪回合结束后的教程是否已显示

function startTutorial() {
    if (!hasShownTutorial) {
        currentTutorial = 1;
        showTutorial(1);
        hasShownTutorial = true;
    }
}

function showTutorial(number) {
    // 隐藏所有教程
    document.querySelectorAll('.tutorial-overlay').forEach(overlay => {
        overlay.style.display = 'none';
    });

    // 显示当前教程
    const tutorial = document.getElementById(`tutorial-${number}`);
    if (tutorial) {
        // 如果是第二个教程，先确保第一个教程的遮罩完全隐藏
        if (number === 2) {
            const firstTutorial = document.getElementById('tutorial-1');
            if (firstTutorial) {
                firstTutorial.style.display = 'none';
                firstTutorial.style.opacity = '0';
            }
            // 短暂延迟后显示第二个教程
            setTimeout(() => {
                tutorial.style.display = 'block';
            }, 50);
        } else {
            tutorial.style.display = 'block';
        }
    }
}

function nextTutorial(current) {
    // 如果是第一个教程，特殊处理
    if (current === 1) {
        const firstTutorial = document.getElementById('tutorial-1');
        if (firstTutorial) {
            firstTutorial.style.opacity = '0';
            firstTutorial.style.display = 'none';
        }
    }
    
    // 隐藏当前教程
    const currentTutorialElement = document.getElementById(`tutorial-${current}`);
    if (currentTutorialElement) {
        currentTutorialElement.style.display = 'none';
    }
    
    if (current < 5) {
        // 显示下一个教程
        showTutorial(current + 1);
    }
}

// 编辑器教程控制
function startEditorTutorial() {
    if (!hasShownEditorTutorial) {
        showEditorTutorial(1);
        hasShownEditorTutorial = true;
    }
}

function showEditorTutorial(number) {
    // 隐藏所有教程
    document.querySelectorAll('.tutorial-overlay').forEach(overlay => {
        overlay.style.display = 'none';
    });

    // 显示当前教程
    const tutorial = document.getElementById(`editor-tutorial-${number}`);
    if (tutorial) {
        tutorial.style.display = 'block';
    }
}

function nextEditorTutorial(current) {
    // 隐藏当前教程
    const currentTutorialElement = document.getElementById(`editor-tutorial-${current}`);
    if (currentTutorialElement) {
        currentTutorialElement.style.display = 'none';
    }
    
    if (current < 3) {
        // 显示下一个教程
        showEditorTutorial(current + 1);
    }
}

// 预览教程控制
function startPreviewTutorial() {
    if (!hasShownPreviewTutorial) {
        showPreviewTutorial(1);
        hasShownPreviewTutorial = true;
    }
}

function showPreviewTutorial(number) {
    // 隐藏所有教程
    document.querySelectorAll('.tutorial-overlay').forEach(overlay => {
        overlay.style.display = 'none';
    });

    // 显示当前教程
    const tutorial = document.getElementById(`preview-tutorial-${number}`);
    if (tutorial) {
        tutorial.style.display = 'block';
    }
}

function nextPreviewTutorial(current) {
    // 隐藏当前教程
    const currentTutorialElement = document.getElementById(`preview-tutorial-${current}`);
    if (currentTutorialElement) {
        currentTutorialElement.style.display = 'none';
    }
    
    if (current < 3) {
        // 显示下一个教程
        showPreviewTutorial(current + 1);
    }
}

// 回合结束后的教程控制
function startPostRoundTutorial() {
    if (!hasShownPostRoundTutorial) {
        showPostRoundTutorial(1);
        hasShownPostRoundTutorial = true;
    }
}

function showPostRoundTutorial(number) {
    // 隐藏所有教程
    document.querySelectorAll('.tutorial-overlay').forEach(overlay => {
        overlay.style.display = 'none';
    });

    // 显示当前教程
    const tutorial = document.getElementById(`post-round-tutorial-${number}`);
    if (tutorial) {
        tutorial.style.display = 'block';
    }
}

function nextPostRoundTutorial(current) {
    // 隐藏当前教程
    const currentTutorialElement = document.getElementById(`post-round-tutorial-${current}`);
    if (currentTutorialElement) {
        currentTutorialElement.style.display = 'none';
    }
    
    if (current < 3) {
        // 显示下一个教程
        showPostRoundTutorial(current + 1);
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化音乐控制
    const openingMusic = document.getElementById('opening-music');
    const gameBgm = document.getElementById('game-bgm');
    
    // 设置音量
    openingMusic.volume = 0.5;
    gameBgm.volume = 0.3;
    
    // 添加点击事件监听器，确保用户交互后才能播放音乐
    document.addEventListener('click', function() {
        // 根据当前显示的屏幕决定播放哪个音乐
        if (document.getElementById('game-screen').style.display !== 'none') {
            openingMusic.pause();
            if (gameBgm.paused) {
                gameBgm.play().catch(e => console.log('Music playback failed:', e));
            }
        } else if (document.getElementById('opening-story1').style.display !== 'none' ||
                  document.getElementById('opening-story2').style.display !== 'none' ||
                  document.getElementById('opening-story3').style.display !== 'none' ||
                  document.getElementById('opening-story4').style.display !== 'none' ||
                  document.getElementById('opening-story5').style.display !== 'none') {
            gameBgm.pause();
            if (openingMusic.paused) {
                openingMusic.play().catch(e => console.log('Music playback failed:', e));
            }
        }
    }, { once: true });

    // Export 按钮点击事件
    const exportButton = document.querySelector('.export-button');
    if (exportButton) {
        exportButton.addEventListener('click', function() {
            switchScreen('preview-area');
        });
    }

    // New Post 按钮点击事件
    const newPostButton = document.querySelector('.new-post-button');
    if (newPostButton) {
        newPostButton.addEventListener('click', function() {
            switchScreen('editor-screen');
        });
    }

    // Upload 按钮点击事件
    const uploadButton = document.querySelector('.upload-button');
    if (uploadButton) {
        uploadButton.addEventListener('click', function() {
            hasShownPreviewTutorial = true;  // 标记预览教程已显示
            // 不再直接切换到游戏主界面，而是让drag.js中的事件处理程序处理
            // 隐藏预览区域
            document.querySelector('.preview-area').style.display = 'none';
            
            // 显示结局页面
            const outcomeArea = document.querySelector('.outcome-area');
            if (outcomeArea) {
                outcomeArea.style.display = 'block';
            }
            // 注意：剩余的逻辑由drag.js中的事件处理程序处理
        });
    }

    // Back 按钮点击事件
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', function() {
            switchScreen('editor-screen');
        });
    }

    // 其他按钮事件监听
    const buttonContainer = document.getElementById("buttonContainer");
    if (buttonContainer) {
        buttonContainer.addEventListener("click", function(e) {
            // Add your code here
        });
    }

    // 初始化结局页面关闭按钮
    const outcomeCloseButton = document.querySelector('.outcome-area .window-controls .close');
    if (outcomeCloseButton) {
        outcomeCloseButton.addEventListener('click', function() {
            const outcomeArea = document.querySelector('.outcome-area');
            if (outcomeArea) {
                outcomeArea.style.display = 'none';
                
                // 显示游戏主界面
                document.getElementById('game-screen').style.display = 'block';
                
                // 停止视频播放
                const video = document.querySelector('.outcome-video-container video');
                if (video) {
                    video.pause();
                    
                    // 清除所有事件监听器
                    const newVideo = video.cloneNode(true);
                    if (video.parentNode) {
                        video.parentNode.replaceChild(newVideo, video);
                    }
                }
                
                // 触发游戏进度更新
                // 这里我们需要手动触发一个自定义事件，让drag.js中的代码知道需要更新游戏进度
                const event = new CustomEvent('outcomeSkipped');
                document.dispatchEvent(event);
            }
        });
    }
}); 